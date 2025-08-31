/* A return statement sends a value back to where the function was called.
This makes the function reusable because we can store the result and use it later.  */

//example 1
console.log("------Example 1 -----------");
function mult(a , b){
    return a*b;
}

let multiplication = mult(10, 55);
console.log("Multiplication :" , multiplication);


/* Example 2 : step 1 superman planning to add to number and send the answer to batman
                step 2 batman will take the answer and square it
                step 3: shaktiman will take the answer and divide by 10 */
console.log("------Example 2 -----------");
function superman (a, b){
    return a + b;
}

function batman (x){
    return x**2 ;
}

function shaktiman(y){
    //return y/10 ;
    console.log("Final result: ", y/10);
}
//let result = shaktiman(batman(superman(10,20)));
// or

let step1 = superman(10,20);
let step2 = batman(step1);
//let result = shaktiman(step2); 
//console.log("Final result: ", result);
shaktiman(step2);

console.log("------Example 3 -----------");
// Return behave like a break

function add(a,b){
    return a + b;

    let x = 5;
    let y = 6;
    console.log("sum: ", x + y); // this line will never execute because return statement exits the function
}

let sum =add(50, 70);
console.log("Sum: ", sum);