/* Global Variables : it can be accessed anywhere in the program . Declared outside of any function 
    Local Variables : it can be accessed only within the function in which it is declared*/ 

// Global Variables
console.log("------Global variable-----");

let globalvar = "I am a global variable"; // global variable

function showglobalvar(){
    console.log(globalvar);
}

showglobalvar();
console.log("-----------");
console.log(globalvar); // accessible here 

//Local variable

console.log("------Local variable-----");

function testlocal(){
    let localvar = "I am local variable"; // local variable
    console.log(localvar);
}

testlocal();
//console.log(localvar); // Uncaught ReferenceError: localvar is not defined