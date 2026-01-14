// Build a grading system using if-else
let mark= 39;

if (mark >= 40) {
  console.log("pass");
} else {
  console.log("fail");
}

// Create a login validation using logical operators.
let username = "adm";
let password = "1234";
if (username === "admin" && password === "1234") {
  console.log("Login Successful");
} else {
  console.log("Invalid Username or Password");
}

// Build a simple calculator logic.
let num1 = 99;
let num2 = 88;
let operator = "/";

if (operator === "+") {
  console.log(num1 + num2);
} else if (operator === "-") {
  console.log(num1 - num2);
} else if (operator === "*") {
  console.log(num1 * num2);
} else if (operator === "/") {
  console.log(num1 / num2);
} else {
  console.log("Invalid operator");
}

// Create a role-based access system using switch
let role = "user";

switch (role) {
  case "admin":
    console.log("Full Access");
    break;

  case "editor":
    console.log("Edit Access");
    break;

  case "user":
    console.log("View Access");
    break;

  default:
    console.log("No Access");
}

// Write a discount checker for an e-commerce site
let amt = 2000;

if( amt >= 2500)
    console.log("DISCOUNT OF 30%");
else if(amt >= 1500)
    console.log("DISCOUNT OF 20%");
else{
    console.log("DISCOUNT OF 10%");
    
}
    
    