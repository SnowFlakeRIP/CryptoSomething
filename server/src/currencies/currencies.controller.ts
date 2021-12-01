import {Controller, Get} from '@nestjs/common';
import {CurrenciesService} from "./currencies.service";

@Controller('currencies')
export class CurrenciesController {
  constructor(private currenciesService: CurrenciesService) {
  }

  @Get('/get_currencies')
  getCurrencies() {
    return this.currenciesService.getCurrencies()
  }
}
