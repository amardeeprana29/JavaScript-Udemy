// example 1

let isLoggedIn = true;
let isEmailVerified = true;
let isPasswordCorrect = true;

/*
if(isLoggedIn){
    if(isEmailVerified){
        console.log("Email is verified");
        if(isPasswordCorrect){
            console.log("Password is correct");
            console.log("Welcome to your account");
        } else{
            console.log("incorrrect password");
        }
    } else{
        console.log("Please verify your email");
    }
} else{
    console.log("Please check your login details");
}

or
*/

if(isLoggedIn && isEmailVerified && isPasswordCorrect){
    console.log("Welcome to your account");
} else {
    console.log("Please check your login details");
}

console.log("--------------------");
// example 2

let manAge = 21;
let womanAge = 17;

if(manAge >= 21){
    if(womanAge >= 18){
        console.log("Both are eligible to marry");
    } else {
        console.log("Both are not eligible to marry");
    }
} 