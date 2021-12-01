import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "./user.model";

@Table({tableName: 'refresh_password_link'})
export class Password extends Model {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type:DataType.STRING})
  link:string

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  user_id: number

  @BelongsTo(() => User)
  user: User[]
}
