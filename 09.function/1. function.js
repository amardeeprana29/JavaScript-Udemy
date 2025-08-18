// function is a block of code that performs a specific task and it is reusable
// It’s like a machine — you give it input, it processes it, and returns output.

// basic example

function greet(){
    console.log("Hello Amardeep!");
}

// function to perform addition task 
function addition(){
    let a = 10;
    let b = 50;
    let sum = a + b;
    console.log(sum);
}

// function to perform subtraction task 
function subtraction(){
    let a = 100;
    let b = 70;
    let difference = a - b;
    console.log(difference);
}

// call functions which you require task 
// subtraction();
// addition();

// Example 1

function superman(){
    let name = "Amardeep";
    console.log(name);
}

for(let i = 1; i<=5; i++){
    // superman();
}

// or Example 1

function hero(){
    let name = "Amardeep Rana"
    for(let i=1; i<=5; i++){
        console.log(name);
    }
}

hero();