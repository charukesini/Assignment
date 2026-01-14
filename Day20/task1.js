// Print Numbers from 1 to 10 using a Function
function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

printNumbers(); 

function addNum(a, b) {
  return a + b;
}

console.log(addNum(10, 20));

//  loop to print even numbers
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// normal function into arrow function
function multiply(a, b) {
  return a * b;
}
const multiply = (a ,b)=> a*b;
console.log(multiply(5, 4));
