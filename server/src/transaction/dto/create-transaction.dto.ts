import {ApiProperty} from "@nestjs/swagger";

export class CreateTransactionDto {
    @ApiProperty({example: 'пополнение', description: 'Тип транзакции'})
    transaction_type:string
    @ApiProperty({example: 3000, description: 'Баланс'})
    transaction_balance:number
    @ApiProperty({example: 20000, description: 'Сумма по операции'})
    transaction_count:number
    @ApiProperty({example:1,description:'Уникальный идентификатор кошелька'})
    purse_id:number
}