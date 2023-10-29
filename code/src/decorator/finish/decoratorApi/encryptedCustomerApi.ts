import { Customer } from '../customer';
import { Api } from '../api';

export class EncryptedCustomerApi implements Api {
  constructor(private api: Api) {}

  public get(): Customer {
    const customer = this.api.get();

    return new Customer(
      `encrypted(${customer.name})`,
      `encrypted(${customer.lastName})`,
      customer.age
    );
  }
}
