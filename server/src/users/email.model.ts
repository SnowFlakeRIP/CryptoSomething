import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "./user.model";

@Table({tableName: 'emails'})
export class Email extends Model {
  @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
  id: number

  @Column({type: DataType.STRING, allowNull: false})
  link: string

  @Column({type: DataType.BOOLEAN, allowNull: false})
  active: boolean

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  user_id: number

  @BelongsTo(() => User)
  user: User[]
}
