import {forwardRef, Module} from '@nestjs/common';
import {PursesController} from './purses.controller';
import {PursesService} from './purses.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Purses} from "./purses.model";
import {AuthModule} from "../auth/auth.module";

@Module({
    controllers: [PursesController],
    providers: [PursesService],
    imports: [
        SequelizeModule.forFeature([Purses]),
        forwardRef(() => AuthModule)
    ]
})
export class PursesModule {
}
