import {Injectable} from '@nestjs/common';
import {Currencies} from "./currencies.model";

@Injectable()
export class CurrenciesService {

  async getCurrencies() {
    try {
      const currencies = await Currencies.findAll()
      return currencies
    } catch (e) {
      return e
    }
  }
}
