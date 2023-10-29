import { Api } from '../api';
import { Customer } from '../customer';

export class CustomerApi implements Api {
  public get(): Customer {
    return new Customer('John', 'Doe', 30);
  }
}
