export class Employee {
  work() {
    return 'Employee is working';
  }
}

export class Manager {
  private employee: Employee;

  constructor(employee: Employee) {
    this.employee = employee;
  }

  work() {
    return this.employee.work() + ' under Manager.';
  }
}
