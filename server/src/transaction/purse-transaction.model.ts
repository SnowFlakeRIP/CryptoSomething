import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Purses} from "../purses/purses.model";
import {Transaction} from "./transaction.model";
import {ApiProperty} from "@nestjs/swagger";

@Table({tableName: 'purse_transaction'})
export class PurseTransaction extends Model {
    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 1, description: 'Уникальный идентификатор кошелька'})
    @ForeignKey(() => Purses)
    @Column({type: DataType.INTEGER})
    purse_id: number

    @ApiProperty({example: 1, description: 'Уникальный идентификатор транзакции'})
    @ForeignKey(() => Transaction)
    @Column({type: DataType.INTEGER})
    transaction_id: number
}
