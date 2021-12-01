import {Body, Controller, Get, Headers, Param, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./user.model";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@ApiTags('Работа с пользователями')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @ApiOperation({summary: 'Создание пользователя'}) // Отвечает за описание
    @ApiResponse({status: 200, type: User}) // Отвечает за ответ сервера
    @Post('/create_user')
    createUser(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({summary: 'Получение пользователей'}) // Отвечает за описание
    @ApiResponse({status: 200, type: [User]}) // Отвечает за ответ сервера
    @UseGuards(JwtAuthGuard)
    @Get('/get_users')
    getUsers() {
        return this.usersService.getUsers()
    }

    @Post('/email')
    send(@Body() to,link ){
      return this.usersService.send(to,link)
    }

    @Get('/activate/:link')
    activate(@Param() link){
      return this.usersService.activate(link)
    }

    @Get('/get_link')
    get_link(@Headers() headers){
      return this.usersService.getLink(headers)
    }

    @Get('/get_password_link/:link/:password')
    get_password_link(@Param() link){
      return this.usersService.refresh_password(link)
    }
}
