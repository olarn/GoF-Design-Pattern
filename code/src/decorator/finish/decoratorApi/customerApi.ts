import { Customer } from '../customer';

export class CustomerApi {
  public get(): Customer {
    return new Customer('John', 'Doe', 30);
  }
}
