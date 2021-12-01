import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/user.model";



@Table({tableName: 'user_bios'})
export class Bio extends Model  {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор информации'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Иван', description: 'Имя пользователя'})
    @Column({type: DataType.STRING})
    user_name: string;

    @ApiProperty({example: 'Иванов', description: 'Фамииля пользователя'})
    @Column({type: DataType.STRING})
    user_second_name: string;

    @ApiProperty({example: 'Иванович', description: 'Отчество пользователя'})
    @Column({type: DataType.STRING})
    user_patronomyc: string;

    @ApiProperty({example: '84657526753', description: 'Мобильный телефон пользователя'})
    @Column({type: DataType.STRING})
    user_number: string;

    @ForeignKey(() => User)
    @ApiProperty({example: '1', description: 'Уникальный идентификатор пользователя'})
    @Column({type: DataType.INTEGER})
    user_id: number
    @BelongsTo(() => User)
    user: User[]

}