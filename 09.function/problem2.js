// using the Even/Odd function calculate the sum of even numbers in the array and also sum of odd numbers.

// step 1 : write even/odd function
// step 2 : determine even and odd number in the array.
// step 3 : calculate the sum

// 1. write even/odd function
function check(num){
    if(num % 2 == 0){
        return true;
    }else {
        return false;
    }
}

// array declaration 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 6];

// determine even numbers

let sum_even = 0;

for(let i = 0; i<arr.length; i++){
    //sum = sum + i;   // this is for all numbers - 42
    // now I need to sum only even numbers so
    //arr[i] % 2 == 0 . also we can write by using function
    if(check(arr[i]) == true){
            sum_even = sum_even + arr [i];
            }
}
console.log("Sum of even no. :",  sum_even);

// determine odd number
let sum_odd = 0;

for(let i = 0; i<arr.length; i++){
    //arr[i] % 2 != 0 . also we can write by using function
    if(check(arr[i]) == false){
                sum_odd = sum_odd + arr[i];
                } 
}
console.log("sum of odd no. :" , sum_odd);
