import { Customer } from './customer';

export interface Api {
  get(): Customer;
}
