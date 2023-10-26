export class Employee {
  work() {
    return "Employee is working";
  }
}

export class Manager extends Employee {
  override work() {
    return super.work() + " under Manager.";
  }
}
