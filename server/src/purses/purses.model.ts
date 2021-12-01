import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import {Balance} from "../balance/balance.model";
import {Currencies} from "../currencies/currencies.model";
import {Transaction} from "../transaction/transaction.model";
import {PurseTransaction} from "../transaction/purse-transaction.model";
import {ApiProperty} from "@nestjs/swagger";


@Table({tableName: 'purses'})
export class Purses extends Model {
    @ApiProperty({example: 1, description: 'Уникальный идентификатор кошелька'})
    @Column({type: DataType.INTEGER,  primaryKey: true, autoIncrement: true})
    id: number
    @ApiProperty({example: 20000, description: 'Количество валюты на кошельке'})
    @Column({type: DataType.DECIMAL, allowNull: false})
    purse_summary: number
    @ApiProperty({example: '12345678901', description: 'Уникальный номер кошелька'})
    @Column({type: DataType.STRING, unique: true})
    purse_number: string
    @ApiProperty({example: 1, description: 'Уникальный идентификатор баланса, который принадлежит пользователю'})
    @ForeignKey(() => Balance)
    @Column({type: DataType.INTEGER})
    user_balance_id: number
    @ApiProperty({example: 1, description: 'Уникальный идентификатор валюты'})
    @ForeignKey(() => Currencies)
    @Column({type: DataType.INTEGER})
    currencies_id: number

    @BelongsTo(() => Balance)
    balance: Balance[]

    @BelongsTo(() => Currencies)
    currencies: Currencies[]

    @BelongsToMany(() => Transaction, () => PurseTransaction)
    transactions: Transaction[]
}
