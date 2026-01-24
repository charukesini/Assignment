let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers.push(6);   
console.log(numbers);

numbers.pop();     
console.log(numbers);


numbers.forEach(function (n) {
  console.log(n);
});

// let doubledNumbers = numbers.map(function (num) {
//   return num * 2;
// });

// console.log(doubledNumbers);

let doubled = numbers.map(n => n * 2);
console.log(doubled);


// let oddNumbers = numbers.filter(function (num) {
//   return num % 2 !== 0;
// });

// console.log(oddNumbers);

let odd = numbers.filter(n => n % 2 !== 0);
console.log(odd);


