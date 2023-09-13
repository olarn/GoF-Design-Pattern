import { Address } from "./customer";
import { CustomerBuilder } from "./customerBuilder";

describe('CustomerBuilder', () => {
    it('should build a customer to JSON with simple data', () => {
        const customerBuilder = new CustomerBuilder();
        const customerData = customerBuilder
            .setName('John Doe')
            .setTelNo('555-555-5555')
            .build();
        expect(customerData).toEqual('{"firstName":"John","lastName":"Doe","telNo":"555-555-5555"}');
    });

    it('should build a customer to JSON with more optional data', () => {
        const customerBuilder = new CustomerBuilder();
        const customerData = customerBuilder
            .setName('John Doe')
            .setTelNo('555-555-5555')
            .setAddress(new Address('123 Main St.', 'Anytown', 'TX', '12345'))
            .build();
        expect(customerData).toEqual('{"firstName":"John","lastName":"Doe","telNo":"555-555-5555","address":{"street":"123 Main St.","city":"Anytown","state":"TX","zip":"12345"}}');
    });
});