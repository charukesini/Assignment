// Define a function in your own words
//  A function is a block of code that performs a specific task and runs only when we call it.

//  function to print your name
function pName(name) { 
    // name => parameter
  console.log("hello"+ name);
}
    // aasha => argument
pName("aasha");  

// Create a function that adds two numbers
function addNum(a, b) {
  return a+b;
}

console.log(addNum(16,27));

// Convert a normal function to arrow function
function multiply(x, y) {
  return x * y;
}
multiply = (x,y)=>x*y
{
    console.log(multiply(99,9));
    
}