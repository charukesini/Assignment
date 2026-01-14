// Create a user profile object with name, age, and city.
const userProfile = {
  name: "Charukesini",
  age: 21,
  city: "Madurai"
};

// Build a score counter using let
let score = 0;
console.log("Initial score:", score);

score = score + 10;     // Updating score
console.log("Updated score:", score);

// Create a settings object using const
const settings = {
  theme: "light",
  notifications: true,
  language: "English"
};

console.log(settings);

// Log different data types in the console
let message = "Welcome";     // string
let points = 100;            // number
let isLoggedIn = true;       // boolean
let emptyValue = null;       // null
let notAssigned;             // undefined

console.log(message, typeof message);
console.log(points, typeof points);
console.log(isLoggedIn, typeof isLoggedIn);
console.log(emptyValue, typeof emptyValue);
console.log(notAssigned, typeof notAssigned);

// Prepare a JS file with base variables for future projects
let appName = "My Web App";
let version = "1.0";
let isOnline = false;

console.log(appName, version, isOnline);