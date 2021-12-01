import {ApiProperty} from "@nestjs/swagger";

export class CreatePurseDto {
    @ApiProperty({example: 30000, description: 'Количество валюты на кошельке'})
    purse_summary: number
    @ApiProperty({example: '12345678901', description: 'Уникальный номер кошелька'})
    purse_number: string
    @ApiProperty({example: 1, description: 'Уникальный идентификатор баланса, который принадлежит пользователю'})
    user_balance_id: number
    @ApiProperty({example: 1, description: 'Уникальный идентификатор валюты'})
    currencies_id: number
}