// OOPS: Object-Oriented Programming is a way of writing code using real-world objects.
//       It helps us organize code, reuse logic, and manage large programs easily.

class User{
    name = 'aasha';
    age = 25;
    display(){
        console.log("name: ", this.name);    
    }
}

// this refers to the current object that is using the class or method.
// EG: this.name = name;

let people = [
  { name: "aasha", age: 21 },
  { name: "Anu", age: 22 },
  { name: "Priya", age: 23 }
];

console.log(people[2].age);

class Per{
  constructor(name) {
    this.name = name;
  }
}
class sons extends Per {
  constructor(name, rollNo) {
    super(name);
    this.rollNo = rollNo;
  }
}
let gum = new sons("aasha", 3);
console.log(gum);


