import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/user.model";
import {ApiProperty} from "@nestjs/swagger";

@Table({tableName:'user_refresh_token'})
export class refreshToken extends Model{
  @Column({type:DataType.INTEGER,unique:true,primaryKey:true,autoIncrement:true})
  id:number
  @Column({type:DataType.STRING,unique:true})
  token:number

  @ForeignKey(() => User)
  @ApiProperty({example: '1', description: 'Уникальный идентификатор пользователя'})
  @Column({type: DataType.INTEGER})
  user_id: number
  @BelongsTo(() => User)
  user: User[]
}
