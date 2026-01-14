// Check if a number is positive or negative
let num = -1;

if(num >= 0){
        console.log("NUMBER IS PSITIVE");
}
else{
    console.log("NUMBER IS NEGATIVE");
    
}
//  numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
// even numbers between 1 and 10

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// WHILE LOOP
let i=1;
while(i<=5){
    console.log(i);
    i++;  
}
// DO WHILE
let j = 4;

do {
  console.log(j);
  j++;
} while (j <= 5);


// Write a switch example
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
