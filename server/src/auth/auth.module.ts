import {forwardRef, Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";
import {BiosModule} from "../bios/bios.module";
import {JwtAuthGuard} from "./jwt-auth.guard";
import {SequelizeModule} from "@nestjs/sequelize";
import {refreshToken} from "./refreshToken.model";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        forwardRef(() => UsersModule),
        BiosModule,
        JwtModule.register({
            secret: process.env.PRIVATE_KEY || 'SECRET',
            signOptions: {
                expiresIn: '24h'
            }
        }),
      SequelizeModule.forFeature([refreshToken])
    ], exports: [AuthService, JwtModule]
})
export class AuthModule {
}
