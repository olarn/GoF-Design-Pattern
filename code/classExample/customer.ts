interface ICustomer {
    getMailingAddress(): string;
}

class Customer implements ICustomer {
    private firstName: string;
    private lastName: string;
    private addresses: Address[];

    constructor(firstName: string, lastName: string, address: Address[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.addresses = address;
    }
    getMailingAddress(): string {
        return this.firstName + " " +
            this.lastName + "\n" +
            this.addresses
                .map(address => address.getFormettedAddress())
                .join("\n");
    }
}

class Address {
    line1: string;
    line2: string;
    zipCode: string;
    addressType: string;

    getFormettedAddress(): string {
        return this.line1 + "\n" + this.line2 + "\n" + this.zipCode;
    }
}

let address = new Address();
address.line1 = "123 Main St.";
address.line2 = "Suite 101";
address.zipCode = "12345";
address.addressType = "Home";

let addresses = [address];
let c = new Customer("John", "Smith", addresses);

console.log(c.getMailingAddress());