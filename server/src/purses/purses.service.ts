import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Purses} from "./purses.model";
import {JwtService} from "@nestjs/jwt";
import {CreatePurseDto} from "./dto/create-purse.dto";
import {Balance} from "../balance/balance.model";
import {Currencies} from "../currencies/currencies.model";


@Injectable()
export class PursesService {
  constructor(@InjectModel(Purses)
              private pursesRepository: typeof Purses,
              private jwtService: JwtService) {
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  async createPurse(purseDto: CreatePurseDto, headers) {
    try {
      const token = headers.authorization.split(' ')[1]
      const decoded = this.jwtService.verify(token)
      let purseNumber: string = ''
      for (let i = 0; i < 10; i++) {
        purseNumber += this.getRandomInt(10).toString()
      }
      const balance = await Balance.findOne({where: {user_id: decoded.id}})
      const purse = await Purses.create({
        ...purseDto,
        user_balance_id: balance.id,
        purse_number: purseNumber.toString()
      })
      return purse
    } catch (e) {
      return e
    }

  }

  async getPurses(headers) {
    try {
      const token = headers.authorization.split(' ')[1]
      const decoded = this.jwtService.verify(token)
      const balance = await Balance.findOne({where: {user_id: decoded.id}})
      const purses = await Purses.findAll({where: {user_balance_id: balance.id}})
      return purses
    } catch (e) {
      return e
    }

  }

  async getPursesWithCurrencies(headers) {
    try {
      const token = headers.authorization.split(' ')[1]
      const decoded = this.jwtService.verify(token)
      console.log(decoded)
      const balance = await Balance.findOne({where: {user_id: decoded.id}})
      const purses = await Purses.findAll({where: {user_balance_id: balance.id}, include: Currencies})
      return purses
    } catch (e) {
      return e
    }
  }
}
