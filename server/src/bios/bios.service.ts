import {ExecutionContext, Headers, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Bio} from "./bios.model";
import {CreateBioDto} from "./dto/create-bio.dto";
import {JwtService} from "@nestjs/jwt";

import {CreateUserDto} from "../users/dto/create-user.dto";
import {User} from "../users/user.model";


@Injectable()
export class BiosService {
  constructor(@InjectModel(Bio)
              private bioRepository: typeof Bio,
              private jwtService: JwtService,
  ) {
  }

  async updateBio(dto: CreateBioDto, dto2: CreateUserDto, headers) {
    try {
      const token = headers.authorization.split(' ')[1]
      const decoded = this.jwtService.verify(token)
      const bio = await this.bioRepository.update(dto, {where: {user_id: decoded.id}})
      const user = await User.update(dto2, {where: {id: decoded.id}})
      if (bio && user) {
        return {bio, user}
      } else {
        return {result: 'error'}
      }
    } catch (e) {
      return e
    }

  }

  async getBio(headers) {
    try {
      const token = headers.authorization.split(' ')[1]
      const decoded = this.jwtService.verify(token)
      const bio = this.bioRepository.findOne({where: {user_id: decoded.id}})
      return bio
    } catch (e) {
      return e
    }

  }
}
