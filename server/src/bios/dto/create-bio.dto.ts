import {ApiProperty} from "@nestjs/swagger";

export class CreateBioDto {
    @ApiProperty({example: 'Иван', description: 'Имя пользователя'})
    readonly user_name: string;
    @ApiProperty({example: 'Иванов', description: 'Фамииля пользователя'})
    readonly user_second_name: string;
    @ApiProperty({example: 'Иванович', description: 'Отчество пользователя'})
    readonly user_patronomyc: string;
    @ApiProperty({example: '84657526753', description: 'Мобильный телефон пользователя'})
    readonly user_number: string
    @ApiProperty({example: '1', description: 'Уникальный идентификатор пользователя'})
    user_id: number
}