// A multidimensional array is an array that contains other arrays as elements.

let arr = [
  [1, 2, 3],   // Row 1
  [4, 5, 6],   // Row 2
  [7, 8, 9]    // Row 3
];


let val = arr[1][0];
console.log(val);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

let stu = [
  [80, 90],
  [75, 85]
];
console.log(stu[0][1]);

