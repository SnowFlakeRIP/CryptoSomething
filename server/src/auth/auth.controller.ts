import {Body, Controller, Post, Request, Res} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "./auth.service";
import {User} from "../users/user.model";
import {Response} from "express";

@ApiTags('Работа с авторизацией')
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @ApiOperation({summary: 'Авторизация'})
  @ApiResponse({status: 200})
  @Post('/login')
  login(@Body() userDto: CreateUserDto) {

    return this.authService.login(userDto)
  }

  @ApiOperation({summary: 'Регистрация'})
  @ApiResponse({status: 200, type: User})
  @Post('/registration')
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto)
  }
  @ApiOperation({summary:'Обновление токена'})
  @ApiResponse({status:200,description:'Вовзращает access и refresh токены'})
  @Post('/refresh')
  refresh(@Body() frontToken) {
    return this.authService.refresh(frontToken)
  }


  @Post('/check')
  @ApiOperation({summary:'Проверка токена на валидность'})
  @ApiResponse({status:200,description:'Вернет true, если токен валидный'})
  check(@Body() token){
    return this.authService.check(token)
  }


  @ApiOperation({summary:'Создание и отправка ссылки на сброс пароля'})
  @ApiResponse({status:200,description:'При успешной отправке вернет success'})
  @Post('/refresh_password')
  refresh_password(@Body() email){
    return this.authService.create_link(email)
  }
}

