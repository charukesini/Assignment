// Student Marks Analyzer (array + reduce)
let stu = [
  { name: "Hiya", marks: 75 },
  { name: "Asha", marks: 90 },
  { name: "Ravi", marks: 85 }
];

let totalMarks = stu.reduce(function (total, student) {
  return total + student.marks;
}, 0);

console.log("Total Marks:", totalMarks);

// Even/Odd Number Filter App
let numbers = [1, 2, 3, 4, 5, 6];

let even = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log("Even Numbers:", even);

// Product Price Calculator using map

let prices = [100, 200, 300];

let increasedPrices = prices.map(function (price) {
  return price + 50;
});

console.log(increasedPrices);

// Search Students Above Certain Marks
let students = [
  { name: "hiya", marks: 75 },
  { name: "Asha", marks: 90 }
];
let toppers = students.filter(function(m){
  return m.marks >= 79;
});
console.log(toppers);

// Shopping Cart Total Calculator
let cartPrices = [499, 299, 199];

let totalAmount = cartPrices.reduce(function (total, price) {
  total=0;
  return total + price;
}, 0);

console.log("Total Amount:", totalAmount);
