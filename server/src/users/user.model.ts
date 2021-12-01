import {BelongsTo, Column, DataType, HasOne, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Bio} from "../bios/bios.model";
import {Balance} from "../balance/balance.model";
import {refreshToken} from "../auth/refreshToken.model";
import {Email} from "./email.model";
import {Password} from "./refresh_password.model";


@Table({tableName: 'user'})
export class User extends Model {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор пользователя'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'testemail@gmail.com', description: 'Почта пользователя'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: '12345678', description: 'Пароль пользователя'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @HasOne(() => Bio)
  bio: Bio[]

  @HasOne(() => Balance)
  balance: Balance[]

  @HasOne(() => refreshToken)
  token: refreshToken[]

  @HasOne(() => Email)
  link: Email[]

  @HasOne(() => Password)
  refresh_password: Password[]
}
