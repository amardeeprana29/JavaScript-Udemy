// prompt box: display a prompt box with a message and an input field
// it pauses the script until the user ennter a value and press OK or Cancel
// it return the value entered by the user or null if Cancel is pressed

// Example 1: basic input 

let name = prompt("What is your name?");
console.log("Hello, " + name + "!");

console.log("--------------------");
// Example 3: using prompt() in a calculator

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let sum = num1 + num2;
console.log("The sum is: " + sum);

console.log("--------------------");