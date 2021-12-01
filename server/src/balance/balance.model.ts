import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {User} from "../users/user.model";
import {Purses} from "../purses/purses.model";
import {ApiProperty} from "@nestjs/swagger";

@Table({tableName: 'user_balance'})
export class Balance extends Model {
    @ApiProperty({example:1,description:'Уникальный идентификатор баланса'})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number

    @ApiProperty({example:1,description:'Уникальный идентификатор пользователя, к которому привязан кошелек'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number

    @BelongsTo(() => User)
    user: User[]

    @HasMany(()=>Purses)
    purses:Purses[]
}