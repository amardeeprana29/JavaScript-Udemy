// false value : some values automatically behave like false when used in a condition like if statement.
// falsey values are: false, 0, -0, "", undefined, null, NaN

// example 1

let name = false;
if(false){
    console.log("false" ); // won't run
}

if(0){
    console.log("0"); // won't run
}

if(-0){
    console.log("-0"); // won't run
}

if(""){
    console.log(""); // won't run
}

if(undefined){
    console.log("undefined"); // won't run
}

if(null){
    console.log("null"); // won't run
}

console.log("--------------------");

// example : will run

if("Amardeep"){
    console.log("This is truthy");
}

if(125){
    console.log("This number is truthy");
}
if([]){
    console.log("this array is truthy");
}
if({}){
    console.log("this object is truthy");
}

console.log("--------------------");

// example : common use in condition 

let userName = "" ;

if(userName) {
    console.log("please enter your name."); // Runs if userName is falsy
}    
