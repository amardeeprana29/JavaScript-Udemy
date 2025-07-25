/* How to name variables
fullName     camel case
fullname
full_name    snake case
FullName     Pascal case
Full_Name 
*/


// first way to declare a variable
fullName = "Amardeep Rana";
console.log(fullName);

// 2nd way
var countryName = "India";  // avvoid using "var"
console.log(countryName);

countryName ="USA"; // This will throw not error because countryName is a variable and can be reassigned.
console.log(countryName);

// 3rd way
let cityName = "Mumbai";  // "let" use for changeable value
console.log(cityName);

// 4th way
const webName = "My Portfolio";   // use "const" for fixed values
console.log(webName); 

webName = "Demo project"; // This will throw an error because webName is a constant and cannot be reassigned.
console.log(webName);



