import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {PurseTransaction} from "./purse-transaction.model";
import {ApiProperty} from "@nestjs/swagger";
import {Purses} from "../purses/purses.model";

@Table({tableName: 'transaction'})
export class Transaction extends Model {
  @ApiProperty({example: 1, description: 'Уникальный идентификатор транзакции'})
  @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
  id: number

  @ApiProperty({example: 'пополнение', description: 'Тип транзакции'})
  @Column({type: DataType.STRING, allowNull: false})
  transaction_type: string

  @ApiProperty({example: 3000, description: 'Баланс'})
  @Column({type: DataType.DECIMAL, allowNull: false})
  transaction_balance: number

  @ApiProperty({example: 20000, description: 'Сумма по операции'})
  @Column({type: DataType.DECIMAL, allowNull: false})
  transaction_count: number

  @ApiProperty({example: 'Пополнение'})
  @Column({type: DataType.STRING, allowNull: false})
  transaction_action: string

  @BelongsToMany(() => Purses, () => PurseTransaction)
  purses: Purses[]
}
