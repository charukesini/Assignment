// Calculator Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Function calls
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

// Odd / Even Checker
function checkOddEven(num) {
  if (num % 2 === 0) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
}

console.log(checkOddEven(7));

// Area Calculator
function areaOfCircle(radius) {
  return 3.14 * radius * radius;
}

function areaOfRectangle(length, width) {
  return length * width;
}

console.log("Circle Area:", areaOfCircle(5));
console.log("Rectangle Area:", areaOfRectangle(10, 4));

// Greeting App
function greetUser(name) {
  return "Hello " + name + "! Welcome 😊";
}

console.log(greetUser("Charukesini"));

// Simple Menu Program 
function menu(choice) {
  switch (choice) {
    case 1:
      return "You selected Coffee";
    case 2:
      return "You selected Tea";
    case 3:
      return "You selected Juice";
    default:
      return "Invalid choice";
  }
}

console.log(menu(2));

