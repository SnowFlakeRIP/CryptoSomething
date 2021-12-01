import {Injectable} from '@nestjs/common';
import {User} from "./user.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {JwtService} from "@nestjs/jwt";
import {MailerService} from "@nestjs-modules/mailer";
import {Nodemailer, NodemailerDrivers} from "@crowdlinker/nestjs-mailer";
import {Email} from "./email.model";
import {Password} from "./refresh_password.model";
import * as bcrypt from 'bcryptjs'
import {Sequelize} from "sequelize-typescript";
@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepository: typeof User,
              private jwtService: JwtService,
              private readonly mailerService: MailerService,
              private sequelize:Sequelize
  ) {
  }

  async activate(link) {
    console.log(link)
    const activationLink = await Email.findOne({where: {link: link.link}})
    if (!activationLink) {
      return 'Некоректная ссылка активации'
    }
    activationLink.active = true
    await activationLink.save()
    return {message: 'Успешно'}
  }

  async send(to, link) {
    try {
      await this.mailerService.sendMail({
        to: to,
        subject: 'Активация аккаунта на ' + process.env.API,
        from: '88schmakov88@gmail.com',
        html:
          `
        <div>
            <h1>Ссылка для активации</h1>
            <a href="${link}">${link}</a>
        </div>
`
      })
      return {result: 'success'}
    } catch (e) {
      return e
    }

  }

  async send_password(to, link) {
    try {
      await this.mailerService.sendMail({
        to: to,
        subject: 'Изменение пароля для сайта ' + process.env.API,
        from: '88schmakov88@gmail.com',
        html:
          `
        <div>
            <h1>Ссылка для изменения пароля</h1>
            <h2>Обратите внимание - функция работает в тестовом режиме. Для изменения пароля перейдите по ссылке и добавьте в адрессную строку следующую строчку. Если у Вас возникли проблемы - обратитесь в службу поддержки (которой нет ха-ха)</h2>
            <h3>/ваш пароль</h3>
            <a href="${link}">${link}</a>
        </div>
`
      })
      return {result: 'success'}
    } catch (e) {
      return e
    }

  }

  async getLink(headers) {
    try {
      const token = headers.authorization.split(' ')[1]
      const decoded = await this.jwtService.verify(token)
      const link = await Email.findOne({where: {user_id: decoded.id}})
      return link
    } catch (e) {
      return e
    }

  }

  async refresh_password(link) {
    try {
      console.log(link)
      const bd_link = await Password.findOne({where: {link: link.link}})
      if (!bd_link) {
        return {message: 'Некорректная ссылка активации'}
      }
      console.log(bd_link)
      const password = link.password
      const hashPassword = await bcrypt.hash(password, 5)
      const update = await User.update({password: hashPassword}, {where: {id: bd_link.user_id}})
      console.log(update)
      if (update !== null) {
        return {message: 'Пароль успешно изменен'}
      }
    } catch (e) {
      return e
    }

  }

  async createUser(dto: CreateUserDto) {
    try {
      const user = await this.userRepository.create(dto,)
      return user
    } catch (e) {
      return e
    }

  }

  async getUsers() {
    try {
      const users = await this.userRepository.findAll()
      return users
    } catch (e) {
      return e
    }
  }

  async getUserByEmail(email: string) {
    try {
      const user = await this.userRepository.findOne({where: {email: email}, include: {all: true}})
      return user
    } catch (e) {
      return e
    }
  }


}
