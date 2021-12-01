import { Module } from '@nestjs/common';
import { CurrenciesController } from './currencies.controller';
import { CurrenciesService } from './currencies.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Currencies} from "./currencies.model";

@Module({
  controllers: [CurrenciesController],
  providers: [CurrenciesService],
  imports:[
      SequelizeModule.forFeature([Currencies])
  ]
})
export class CurrenciesModule {}
