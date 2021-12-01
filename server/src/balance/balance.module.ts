import { Module } from '@nestjs/common';
import { BalanceController } from './balance.controller';
import { BalanceService } from './balance.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Balance} from "./balance.model";

@Module({
  controllers: [BalanceController],
  providers: [BalanceService],
  imports:[
      SequelizeModule.forFeature([Balance])
  ]
})
export class BalanceModule {}
