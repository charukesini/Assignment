let marksheet = [
  [75, 65, 80],  
  [80, 75, 88],  
  [66, 78, 82]   
];

console.log("Student 2 tamil Marks:", marksheet[1][1]);


let matrixA = [
  [1, 2],
  [3, 4]
];

let matrixB = [
  [5, 6],
  [7, 8]
];

let result = [
  [0, 0],
  [0, 0]
];

for (let i = 0; i < matrixA.length; i++) {
  for (let j = 0; j < matrixA[i].length; j++) {
    result[i][j] = matrixA[i][j] + matrixB[i][j];
  }
}

console.log(result);


let seats = [
  ["A1", "A2", "A3"],
  ["B1", "B2", "B3"],
  ["C1", "C2", "C3"]
];
console.log("Seat B2:", seats[1][1]);

let board = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "", "O"]
];

console.log(board);

let expenses = [
  [100, 50, 30],   
  [80, 20, 40],    
  [60, 30, 20],    
  [90, 40, 10],    
  [120, 60, 30],   
  [70, 20, 10],    
  [50, 30, 20]     
];

expenses.forEach(function(dayExpenses, index) {
  let dailyTotal = dayExpenses.reduce(function(sum, amount) {
    return sum + amount;
  }, 0);

  console.log("Day " + (index + 1) + " Total: ₹" + dailyTotal);
});
