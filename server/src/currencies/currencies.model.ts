import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Purses} from "../purses/purses.model";
import {ApiProperty} from "@nestjs/swagger";

@Table({tableName: 'currencies'})
export class Currencies extends Model {
    @ApiProperty({example: 1, description: 'Уникальный идентификатор валюты'})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number

    @ApiProperty({example: 'emg', description: 'Тип валюты'})
    @Column({type: DataType.STRING, unique: true})
    type: string

    @HasMany(() => Purses)
    purses: Purses[]
}