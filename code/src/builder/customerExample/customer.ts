export class Customer {
  firstName?: string;
  lastName?: string;
  telNo?: string;
  address?: Address;
}

export class Address {
  constructor(street?: string, city?: string, state?: string, zip?: string) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
}
