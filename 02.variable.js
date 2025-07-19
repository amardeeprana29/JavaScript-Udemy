// first way to declare a variable
fullName = "Amardeep Rana";

// 2nd way
var countryName = "India";  // avvoid using "var"
countryName ="USA"; // This will throw not error because countryName is a variable and can be reassigned.

console.log(countryName);

// 3rd way
let cityName = "Mumbai";  // "let" use for changeable value

// 4th way
const webName = "My Portfolio";   // use "const" for fixed values
//webName = "Demo project"; // This will throw an error because webName is a constant and cannot be reassigned.

console.log(webName); 

var isActive = true;
console.log(isActive);

var courseName;
console.log(courseName); // This will log 'undefined' because courseName is declared but not initialized.

const number = 10;
console.log(number);

// How to name variables
//fullName     camel case
//fullname
//full_name    snake case
//FullName     Pascal case
//Full_Name

console.log(fullName);
console.log(countryName);
console.log(cityName);
