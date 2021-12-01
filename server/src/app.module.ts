import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersModule} from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/user.model";
import {BiosModule} from './bios/bios.module';
import {Bio} from "./bios/bios.model";
import {AuthModule} from './auth/auth.module';
import {PursesModule} from './purses/purses.module';
import {BalanceModule} from './balance/balance.module';
import {Purses} from "./purses/purses.model";
import {Balance} from "./balance/balance.model";
import {CurrenciesModule} from './currencies/currencies.module';
import {Currencies} from "./currencies/currencies.model";
import {TransactionModule} from './transaction/transaction.module';
import {Transaction} from "./transaction/transaction.model";
import {PurseTransaction} from "./transaction/purse-transaction.model";
import {refreshToken} from "./auth/refreshToken.model";
import {Email} from "./users/email.model";
import {MailerModule} from "@nestjs-modules/mailer";
import {NodemailerDrivers, NodemailerModule, NodemailerOptions} from "@crowdlinker/nestjs-mailer";
import {Password} from "./users/refresh_password.model";


@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'emg_nest',
      models: [User, Bio, Purses, Balance, Currencies, Transaction, PurseTransaction,refreshToken,Email,Password],
      autoLoadModels: true
    }),
    MailerModule.forRoot({
      transport: {
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
          user:'88schmakov88@gmail.com',
          pass:'q20047878'
        },
      },
      defaults: {

      }
    }),
    UsersModule,
    BiosModule,
    AuthModule,
    PursesModule,
    BalanceModule,
    CurrenciesModule,
    TransactionModule,
  ]
})
export class AppModule {

}
