/* A return statement sends a value back to where the function was called.
This makes the function reusable because we can store the result and use it later.  */

//example 1

function mult(a , b){
    return a*b;
}

let multiplication = mult(10, 55);
console.log("Multiplication :" , multiplication);