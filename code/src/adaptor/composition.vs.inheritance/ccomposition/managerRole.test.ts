import { Employee, Manager } from './manager';

describe('Manager Role', () => {
  it('should be able to do anything as employee do, composition way', () => {
    var employee = new Employee();
    expect(doWorkBy(employee)).toEqual('Employee is working');

    employee = new Manager(employee);
    expect(doWorkBy(employee)).toEqual('Employee is working under Manager.');
  });
});

function doWorkBy(employee: Employee): string {
  return employee.work();
}
