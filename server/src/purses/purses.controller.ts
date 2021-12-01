import {Body, Controller, Get, Headers, Post, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {CreateBioDto} from "../bios/dto/create-bio.dto";
import {PursesService} from "./purses.service";
import {CreatePurseDto} from "./dto/create-purse.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Purses} from "./purses.model";

@ApiTags('Работа с кошельками')
@Controller('purses')
export class PursesController {
  constructor(private pursesRepository: PursesService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post('/create_purse')
  @ApiResponse({status: 200, type: Purses})
  @ApiOperation({summary: 'Создание кошелька'})
  createPurse(@Body() purseDto: CreatePurseDto, @Headers() headers) {
    return this.pursesRepository.createPurse(purseDto, headers)
  }

  @UseGuards(JwtAuthGuard)
  @Get('/get_purses')
  @ApiOperation({summary: 'Получение кошельков'})
  @ApiResponse({status: 200, type: Purses})
  getPurses(@Headers() headers) {
    return this.pursesRepository.getPurses(headers)
  }

  @UseGuards(JwtAuthGuard)
  @Get('/get_purses_with_currencies')
  getPursesWithCurrencies(@Headers() headers) {
      return this.pursesRepository.getPursesWithCurrencies(headers)
  }
}
