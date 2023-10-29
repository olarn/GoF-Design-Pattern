import { Customer } from '../customer';
import { Api } from '../api';

export class CachedCustomerApi implements Api {
  private cachedCustomer: Customer | null = null;

  constructor(private api: Api) {}

  public get(): Customer {
    if (this.cachedCustomer === null) {
      this.cachedCustomer = this.api.get();
    }

    return this.cachedCustomer;
  }
}
