// Student Class with name & marks
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  display() {
    console.log(this.name + " " + this.marks + " ");
  }
}

let s1 = new Student("aasha", 85);
s1.display();

// Vehicle → Car Inheritance example
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(this.brand + " vehicle is starting");
  }
}


class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  showCar() {
    console.log(this.brand + " " + this.model);
  }
}

let car1 = new Car("Toyota", "2025");
// car1.start();
car1.showCar();

// Employee Management System (basic)
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  Details() {
    console.log(this.name + " " + this.salary);
  }
}

let emp1 = new Employee("Ravi", 30000);
let emp2 = new Employee("Anu", 35000);

emp1.Details();
emp2.Details();

// Product List using array of objects
let products = [
  { name: "Mobile", price: 15000 },
  { name: "Laptop", price: 50000 },
  { name: "Headphones", price: 2000 }
];

  console.log(products[0].name + " " + products[0].price);

// School System using OOP concepts
class School {
  constructor(name) {
    this.name = name;
  }

  showSchool() {
    console.log("School Name: " + this.name);
  }
}

class dd extends School {
  constructor(schoolName, fees) {
    super(schoolName);
    this.fees = fees;
  }

  showFees(){
    console.log(this.name + " " + this.fees);
  }
}

let t1 = new dd("ABC School", 100000);
t1.showSchool();
t1.showFees();
