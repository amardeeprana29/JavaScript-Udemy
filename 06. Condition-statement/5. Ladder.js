//exmample 1
let loggedWithEmail = false;
let loggedWithFB = false;
let loggedWithGoogle = false;
let loggedWithPhone = false;
if(loggedWithEmail || loggedWithFB || loggedWithGoogle || loggedWithPhone){
    console.log("you have succeses fully logged in and can access the app");
} else {
    console.log("you are not logged in, please login to access the app");
}

console.log("---------------------");
//Example 2 : Find Grade based on Marks
let marks = 55;

if(marks >= 90){
    console.log("Grade A");
} else if(marks >= 75){
    console.log("Grade B");
} else if(marks >= 60){
    console.log("Grade C");
} else {
    console.log("Fail- Please try again");
}

console.log("---------------------");

// Example3 : Age group categorization
let age = 100;

if(age < 13){
    console.log("Child");
} else if(age < 20){
    console.log("Teenager");
} else if(age < 60){
    console.log("Adult");
} else if(age < 99) {
    console.log("Senior citizen");
} else {
    console.log("Centenarian");
}
