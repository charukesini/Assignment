// Student Record Object (name, age, marks)
let student = {
  name: "Charukesini",
  age: 21,
  marks: 85
};

console.log(student);

// Car Object with method to display details
let car = {
  brand: "Toyota",
  model: "Innova",
  year: 2022,

 Details() {
   console.log(this.brand + " "+ this.model + " "+  this.year );
 }
};
 car.Details();


 let Profile = {
  name: "aasha",
  email: "aasha@gmail.com",
  };

  // update option
Profile.age = 20;
console.log(Profile);

// Product Object (price update logic)
let product = {
  name: "Mobile",
  price: 15000,
  updatePrice(newPrice) {
     return this.price = newPrice;
  }
};

console.log(product.updatePrice(18000));

console.log(product);

// Simple Bank Account Object (deposit, withdraw)
let bank = {
  name:"aasha",
  balance: 5000,

  deposit (amt){
    this.balance += amt
    console.log("deposite successfully");
  },
  withdraw(amt){
        if (amt <= this.balance) {
          console.log("collect ur cash");
    } else {
      console.log("Insufficient Balance");
    }
  }
}

console.log(bank.withdraw(4000));
