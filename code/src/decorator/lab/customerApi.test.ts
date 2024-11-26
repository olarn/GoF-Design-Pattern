import { Customer } from './customer';
import { CustomerApi } from './decoratorApi/customerApi';

describe('[Decorator - lab] Build Response', () => {
  it('should build response', () => {
    // given
    const api = new CustomerApi();

    // when
    const customer: Customer = api.get();

    // then
    expect(customer.name).toBe('John');
  });

  it('should get customer object from cache if possible', () => {
    // apply pattern before add test & code
  });

  it('should get encrypted customer object from cache', () => {
    // apply pattern before add test & code
  });

  it('should be able to get encrypted customer directly without cache', () => {
    // apply pattern before add test & code
  });
});
