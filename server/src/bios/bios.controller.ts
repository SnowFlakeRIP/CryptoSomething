import {Body, Controller, ExecutionContext, Get, Headers, Post, UseGuards} from '@nestjs/common';
import {BiosService} from "./bios.service";
import {CreateBioDto} from "./dto/create-bio.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Bio} from "./bios.model";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {UsersService} from "../users/users.service";
import {CreateUserDto} from "../users/dto/create-user.dto";


@ApiTags('Работа с информацией о пользователе')
@Controller('bios')
export class BiosController {
  constructor(private BiosService: BiosService) {
  }


  @ApiOperation({summary: 'Добавление информации'}) // Отвечает за описание
  @ApiResponse({status: 200, type: Bio}) // Отвечает за ответ сервера
  @UseGuards(JwtAuthGuard)
  @Post('/create_bio')
  updateBio(@Body() bioDto: CreateBioDto, @Body() userDto: CreateUserDto, @Headers() headers) {
    return this.BiosService.updateBio(bioDto,userDto, headers)
  }


  @ApiOperation({summary: 'Получение информации пользователя'}) // Отвечает за описание
  @ApiResponse({status: 200, type: Bio}) // Отвечает за ответ сервера
  @UseGuards(JwtAuthGuard)
  @Get('/get_bio')
  getBio(@Headers() headers) {
    return this.BiosService.getBio(headers)
  }
}
