import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Transaction} from "./transaction.model";
import {JwtService} from "@nestjs/jwt";
import {Purses} from "../purses/purses.model";
import {PurseTransaction} from "./purse-transaction.model";
import {Balance} from "../balance/balance.model";

@Injectable()
export class TransactionService {

    constructor(@InjectModel(Transaction)
                private transactionRepository: typeof Transaction,
                private jwtService: JwtService
    ) {
    }

    async createTransaction(transactionDto) {
        try {
            const purse = await Purses.findOne({where: {id: transactionDto.purse_id}})
            if (purse) {
                try {
                    const transaction = await Transaction.create(transactionDto)
                    const transaction_purse = await PurseTransaction.create({
                        purse_id: transactionDto.purse_id,
                        transaction_id: transaction.id
                    })
                    return {transaction, transaction_purse}
                } catch (e) {
                    return e
                }
            } else {
                return {message: 'кошелька с таким id не существует'}
            }
        } catch (e) {
            return e
        }

    }

    async getTransactions(headers) {
        try {
            const token = headers.authorization.split(' ')[1]
            const decoded = this.jwtService.verify(token)
            const userId = decoded.id
            const balance = await Balance.findOne({where: {user_id: userId}})
            const purses = await Purses.findAll({where: {user_balance_id: balance.id}})
            let tra = []
            let tra_info = []
            for (let i = 0; i < purses.length; i++) {
                const transaction = await PurseTransaction.findOne({where: {purse_id: purses[i].id}})
                tra.push(transaction)
            }
            tra = tra.filter((item) => item !== null)
            for (let i = 0; i < tra.length; i++) {
                const transaction_info = await Transaction.findOne({where: {id: tra[i].transaction_id}})
                tra_info.push(transaction_info)
            }
            return tra_info
        } catch (e) {
            return e
        }

    }
}
