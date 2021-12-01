import {forwardRef, Module} from '@nestjs/common';
import { BiosController } from './bios.controller';
import { BiosService } from './bios.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Bio} from "./bios.model";
import {JwtModule} from "@nestjs/jwt";
import {AuthService} from "../auth/auth.service";
import {AuthModule} from "../auth/auth.module";


@Module({
  controllers: [BiosController],
  providers: [BiosService],
  imports:[
    SequelizeModule.forFeature([Bio]),
     forwardRef(()=>AuthModule)
  ],
  exports:[
      BiosService
  ]
})
export class BiosModule {}
