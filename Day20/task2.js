// Multiplication Table Generator
function multiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
  }
}

multiplicationTable(6);

// Simple Calculator 
function calculator(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else {
    return "Invalid operator";
  }
}

console.log(calculator(10, 5, "+"));

// Odd/Even Checker
function oddEven(num) {
  if (num % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

oddEven(9);

// Factorial Calculator
function factorial(num) {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }

  console.log("Factorial:", fact);
}

factorial(5);

// Menu Program 
function menuProgram(choice) {
  switch (choice) {
    case 1:
      console.log("Pizza");
      break;
    case 2:
      console.log("Burger");
      break;
    case 3:
      console.log("Sandwich");
      break;
    default:
      console.log("Invalid Choice");
  }
}

menuProgram(3);
