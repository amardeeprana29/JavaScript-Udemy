/* Data types in JS: JS is "dynamically type language", so you don't need to define the data type - it detects it automatically
    1. Primitive data types (immutable):
    2. Non-primitive data types (mutable): 
*/ 

// Primitive data types

let name = "Amardeep";  // String
let isActive = true;    // Boolean
let age = 45;           // Number
let height = 5.8;      // Float
let x;                 // Undefined
let y = null;          // Null

console.log(name);
console.log(isActive);
console.log(age);
console.log(height);
console.log(x);
console.log(y);

console.log( "------------" );


// Non-primitive data types

let person = {name: "Amardeep", age: 45, isStudent: true}; // Object
let fruits = ["Apple", "Mango", "Banana",]; // Array
let score = [10, 20, 30]; // Array
function greet(){
    console.log("Hello, " + name);
}        // Function

console.log(person);
console.log(fruits);
console.log(score);
greet();

console.log("------------");
// type checking by using typeof operator

console.log(typeof name);
console.log(typeof Amardeep); // This will throw an error because Amardeep is not defined as a variable
console.log(typeof "Amardeep");
console.log(typeof isActive);
console.log(typeof age);
console.log(typeof 21);
console.log(typeof null);
console.log("------------");
console.log(typeof person);
console.log(typeof fruits); // Output: "object" why? because arrays are objects in JavaScript
console.log(typeof score);
console.log(Array.isArray(fruits)); // true, this checks if fruits is an array
console.log(typeof greet);