//write the function to check the number is even or odd, if it is even then return is True otherwise return false

/*function iseven(num){
    if(num % 2 == 0){
        return true;
    } else {
        return false;;
    }
}

let result = iseven(8);
*/
// console.log(result); 

// Now i want print even is is true  and odd if is false 

/*if(result === true){
    console.log("Even");
} else {
    console.log("odd");
}
*/

// or you can also write the code this way. 

function iseven(num){
    if(num % 2 == 0){
        return "even";
    } else {
        return "odd";
    }
}

let result = iseven(8);
console.log(result);


