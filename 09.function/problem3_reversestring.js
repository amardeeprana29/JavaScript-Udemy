// write a function to reverse a string 

/*
let str = "Amardeep";

let reversedstr = "";
for(let i = str.length - 1; i>=0; i--){
    reversedstr = reversedstr + str[i];
}

console.log(reversedstr);

*/

// Now by using function

function reversestring(str){

    let reversedstr = "";
    for(let i = str.length - 1; i>=0; i--){
        reversedstr = reversedstr + str[i];
    }
    return reversedstr;
}

console.log(reversestring("Amardeep"));
console.log(reversestring("hello"));