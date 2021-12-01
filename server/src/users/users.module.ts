import {forwardRef, Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./user.model";
import {AuthModule} from "../auth/auth.module";
import {Email} from "./email.model";
import {NodemailerDrivers, NodemailerModule, NodemailerOptions} from "@crowdlinker/nestjs-mailer";
import {Password} from "./refresh_password.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Email,Password]),
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService]
})
export class UsersModule {
}
