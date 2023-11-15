import { Address, Customer } from './customer';

export class CustomerBuilder {
  customer: Customer;
  constructor() {
    this.customer = new Customer();
  }

  setName(name: string) {
    this.customer.firstName = name.split(' ')[0];
    this.customer.lastName = name.split(' ')[1];
    return this;
  }

  setAddress(address: Address) {
    this.customer.address = address;
    return this;
  }

  setTelNo(telNo: string) {
    this.customer.telNo = telNo;
    return this;
  }

  build() {
    return JSON.stringify(this.customer);
  }
}
