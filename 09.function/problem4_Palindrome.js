// using the reverse function write the function to check the string is palindrome or not
// what is Palindrome ? : A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
// reverse function
function reverse(str){
    let reversedstr = "";
    for(let i = str.length - 1; i>=0; i--){
        reversedstr = reversedstr + str[i];
    }
    return reversedstr
}

// let name = "Rajan";
// let name = 121 ; // show not palindrome because 121 is a number
let name = "121" ;
let reverse_name = reverse(name);

// console.log(name);
//console.log(reverse_name);

function palindrome(a,b){
    if( a == b){
        console.log(name, ", is a palindrome");
    }else {
        console.log(name, ", is not a palindrome");
    }
}

console.log(reverse_name , ", reversed name");
palindrome(name, reverse_name);