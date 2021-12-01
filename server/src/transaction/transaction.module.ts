import {forwardRef, Module} from '@nestjs/common';
import {TransactionController} from './transaction.controller';
import {TransactionService} from './transaction.service';
import {Transaction} from "./transaction.model";
import {SequelizeModule} from "@nestjs/sequelize";
import {AuthModule} from "../auth/auth.module";

@Module({
    controllers: [TransactionController],
    providers: [TransactionService],
    imports: [SequelizeModule.forFeature([Transaction]),
        forwardRef(() => AuthModule)
    ]
})
export class TransactionModule {
}
