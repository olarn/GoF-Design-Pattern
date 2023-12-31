import { Employee, Manager } from './manager';

describe('[Adaptor - inheritance] Manager Role', () => {
  it('should be able to do anything as employee do, inheritance way', () => {
    var employee = new Employee();
    expect(doWorkBy(employee)).toEqual('Employee is working');

    employee = new Manager();
    expect(doWorkBy(employee)).toEqual('Employee is working under Manager.');
  });
});

function doWorkBy(employee: Employee): string {
  return employee.work();
}
