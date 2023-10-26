export class Customer {
  name: string = '';
  lastName: string = '';
  age: number = 0;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
}
