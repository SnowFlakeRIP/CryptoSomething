import {Body, Controller, Get, Headers, Param, Post, Query, UseGuards} from '@nestjs/common';
import {TransactionService} from "./transaction.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {CreateTransactionDto} from "./dto/create-transaction.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Purses} from "../purses/purses.model";
import {Transaction} from "./transaction.model";
@ApiTags('Работа с транзациями')
@Controller('transaction')
export class TransactionController {
    constructor(private transactionRepository: TransactionService) {
    }

    @UseGuards(JwtAuthGuard)
    @ApiOperation({summary: 'Создание транзакции'})
    @ApiResponse({status:200,type:Transaction})
    @Post('/create_transaction')
    createTransaction(@Body() transactionDto: CreateTransactionDto) {
        return this.transactionRepository.createTransaction(transactionDto)
    }

    @UseGuards(JwtAuthGuard)
    @ApiOperation({summary: 'Получение транзакции'})
    @ApiResponse({status:200,type:Transaction})
    @Get('/get_transactions')
    getTransactions(@Headers() headers){
        return this.transactionRepository.getTransactions(headers)
    }
}
