import { Customer } from './customer';
import { CachedCustomerApi } from './concreteApi/cachedCustomerApi';
import { CustomerApi } from './concreteApi/customerApi';
import { EncryptedCustomerApi } from './concreteApi/encryptedCustomerApi';

describe('[Decorator - finish] Customer API', () => {
  it('should get plain customer object', () => {
    // given
    const api = new CustomerApi();
    // when
    const customer: Customer = api.get();
    // then
    expect(customer.name).toBe('John');
  });

  it('should get customer object from cache if possible', () => {
    // given
    const api = new CustomerApi();
    const cachedApi = new CachedCustomerApi(api);
    // when
    const customer1: Customer = cachedApi.get();
    // then
    expect(customer1.name).toBe('John');
  });

  it('should get encrypted customer object from cache', () => {
    // given
    const api = new CustomerApi();
    const cachedApi = new CachedCustomerApi(api);
    const encryptedApi = new EncryptedCustomerApi(cachedApi);
    // when
    const customer: Customer = encryptedApi.get();
    // then
    expect(customer.name).toBe('encrypted(John)');
    expect(customer.lastName).toBe('encrypted(Doe)');
    expect(customer.age).toBe(30);
  });

  it('should be able to get encrypted customer directly without cache', () => {
    // given
    const api = new CustomerApi();
    const encryptedApi = new EncryptedCustomerApi(api);
    // when
    const customer: Customer = encryptedApi.get();
    // then
    expect(customer.name).toBe('encrypted(John)');
    expect(customer.lastName).toBe('encrypted(Doe)');
    expect(customer.age).toBe(30);
  });
});
