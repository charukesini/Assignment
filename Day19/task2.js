// Simple Calculator using if
let a = 35;
let b = 24;
let operator = "*";
if (operator === "+") {
  console.log(a + b);
} else if (operator === "-") {
  console.log(a - b);
} else if (operator === "*") {
  console.log(a * b);
} else if (operator === "/") {
  console.log(a / b);
} else {
  console.log("Invalid ");
}
// Multiplication Table using Loop
let num = 5;

for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}
// Login Validation (Username & Password)
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login Successful");
} else {
  console.log("Invalid Username or Password");
}
// Grade System using else if
let marks = 78;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// Menu Program using switch
let choice = 2;

switch (choice) {
  case 1:
    console.log("You selected dosa");
    break;
  case 2:
    console.log("You selected idly");
    break;
  case 3:
    console.log("You selected pongal");
    break;
  default:
    console.log("Invalid choice");
}
