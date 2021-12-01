import {Body, HttpException, HttpStatus, Injectable, Post, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'
import {User} from "../users/user.model";
import {Bio} from "../bios/bios.model";
import {Purses} from "../purses/purses.model";
import {Balance} from "../balance/balance.model";
import {refreshToken} from "./refreshToken.model";
import {v4 as uuidv4} from 'uuid'
import {Email} from "../users/email.model";
import {Password} from "../users/refresh_password.model";


@Injectable()
export class AuthService {

  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  async login(userDto: CreateUserDto) {
    try {

        const user = await this.validateUser(userDto)
        const tokens = await this.generateToken(user)
        await this.saveToken(user.id, tokens.refreshToken)
        return tokens
    } catch (e) {
      return e
      //return {message: 'неверные данные'}
    }

  }

  async refresh(frontToken) {
    // Проверяем пришел ли с клиента токен
    if (frontToken.frontToken === null) {
      return {message: 'error'}
    }
    // Пытаемся раскодировать токен
    const token = this.jwtService.verify(frontToken.frontToken, {secret: process.env.PRIVATE_REFRESH_KEY})
    // Если токена нет - отправляем 401 статус
    if (!token) {
      throw new UnauthorizedException({message: 'Пользователь не авторизован'})
    }
    // Находим рефрештокен в базе по id пользователя, который берем в токене с клиента
    const backToken = await refreshToken.findOne({where: {user_id: token.id}})
    // Если они равны обновляем токен доступа и рефрештокен и возвращаем их на сервер, дополнительно обновляем рефрештокен в базе
    if (frontToken.frontToken == backToken.token) {
      const user = await User.findOne({where: {id: token.id}})
      const tokens = await this.generateToken(user)
      await this.saveToken(user.id, tokens.refreshToken)
      return tokens
    } else {
      return {message: 'error'}
    }
  }

  async registration(userDto: CreateUserDto) {

    try {
      const candidate = await this.userService.getUserByEmail(userDto.email)
      if (candidate) {
        throw new HttpException('Пользователь с таким email уже сущетсвует', HttpStatus.BAD_REQUEST)
      }
      const hashPassword = await bcrypt.hash(userDto.password, 5)
      const activation_link = uuidv4()
      const user = await this.userService.createUser({...userDto, password: hashPassword})
      const link = await Email.create({link: activation_link, active: false, user_id: user.id})
      const email = await this.userService.send(user.email, `${process.env.API}/users/activate/${activation_link}`)
      const bios = await Bio.create({
        user_name: '',
        user_second_name: '',
        user_patronomyc: '',
        user_number: '',
        user_id: user.id
      })
      let purseNumber1: string = ''
      for (let i = 0; i < 10; i++) {
        purseNumber1 += this.getRandomInt(10).toString()
      }
      let purseNumber2: string = ''
      for (let i = 0; i < 10; i++) {
        purseNumber2 += this.getRandomInt(10).toString()
      }
      let purseNumber3: string = ''
      for (let i = 0; i < 10; i++) {
        purseNumber3 += this.getRandomInt(10).toString()
      }
      const balance = await Balance.create({
        user_id: user.id
      })
      const purse = await Purses.create({
        purse_summary: 0,
        purse_number: purseNumber1.toString(),
        user_balance_id: balance.id,
        currencies_id: 1
      })
      const purse2 = await Purses.create({
        purse_summary: 0,
        purse_number: purseNumber2.toString(),
        user_balance_id: balance.id,
        currencies_id: 2
      })
      const purse3 = await Purses.create({
        purse_summary: 0,
        purse_number: purseNumber3.toString(),
        user_balance_id: balance.id,
        currencies_id: 3
      })
      const token = await this.generateToken(user)
      const refresh_token = token.refreshToken
      await this.saveToken(user.id, refresh_token)
      return ({token, refresh_token, bios, balance, purse, purse2, purse3, link, email})
    } catch (e) {
      return e
    }

  }

  async create_link(email) {
    try {
      const user = await User.findOne({where: {email: email.email}})
      if (!user) {
        return {message: 'Пользователя с таким email не существует'}
      }

      const user_email = await Email.findOne({where: {user_id: user.id}})
      if (user_email.active == false) {
        return {message: 'Для пользователей с неподтвержденной почтой невозможно автоматическое восстановление пароля. Обратитесь к администратору'}
      }
      const activation_link = uuidv4()
      await Password.create({link: activation_link,user_id:user.id})
      const sending_email = await this.userService.send_password(email.email, `${process.env.API}/users/get_password_link/${activation_link}`)
      console.log(sending_email)
      if (sending_email) {
        return {message: 'Письмо успешно отправлено'}
      }
    } catch (e) {
      return e
    }

  }

  async check(token) {
    if (!token) {
      return {message: 'error'}
    }

    try {
      const candidate = this.jwtService.verify(token.token)
      if (candidate) {
        return {result: 'true'}
      }
    } catch (e) {
      return {message: 'error'}
    }


  }


  private async generateToken(user: User) {
    try {
      const payload = {id: user.id, email: user.email}
      return {
        token: this.jwtService.sign(payload),
        refreshToken: this.jwtService.sign(payload, {secret: process.env.PRIVATE_REFRESH_KEY, expiresIn: '30d'})
      }
    } catch (e) {
      return e
    }
  }

  private async saveToken(userId, refresh_token) {
    const tokenData = await refreshToken.findOne({where: {user_id: userId}})
    if (tokenData) {
      const token = await tokenData.update({token: refresh_token}, {where: {user_id: userId}})
      return token
    }
    const create_token = await refreshToken.create({user_id: userId, token: refresh_token})
    return create_token
  }


  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email)
    const password = await bcrypt.compare(userDto.password, user.password)
    if (user && password) {
      return user
    }
    throw new UnauthorizedException({message: 'Некоректный логин или пароль'})
  }
}
