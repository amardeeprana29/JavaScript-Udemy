/*
Operators in JavaScript
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. Ternary Operator
7. Type Operators
8. String Concatenation(Joining): (+)
*/


// 1. Arithmetic Operators: (+ - * / % , **(exponential), ++, --)

let num1 = 50;
let num2 = 20;
/* 
let sum = num1 + num2 ;
console.log("sum: " + sum); */

console.log("sum: " + (num1 + num2));
console.log("subtraction: " +(num1 - num2));
console.log("multiplication: " + (num1 * num2));
console.log("division: " + (num1 / num2));
console.log("modulus: " + (num1 % num2));
console.log("exponential: "+ (5**3));
console.log("Pre-increment: "+ (++num1)); // Increment num1 by 1 and then use it
console.log("Pre-decrement: " + (--num2)); // Decrement num2 by 1 and then use it
console.log("Post-increment: " + (num1++)); // Use num1 and then increment it
console.log("Post-decrement: " + (num2--)); // Use num2 and then decrement it

console.log("-------------------");

// 2. Assignment Operators: (=, +=, -=, *=, /=, %=, **=, <<=, >>=, &=, |=, ^=)

let num3 = 10;
let num4 = 8;
let num5 = 5;
/*
num3 = num4;  // num3 = 8
console.log("Assignment Operators: " + num3);*/

console.log("Assignment Operators: " + (num3 = num4)); // Assign num4 to num3
console.log("now num4: " + (num4 = 10)+ " and num3: " + num3); 

console.log("Addition Assignment: " + (num3 += num4) + " now num3: " + num3); // num3 = num3 + num4
num5 += 7;
console.log( "num5: " + num5); 

num4 -= 2;
console.log("Subtraction Assignment: " + num4 +" now num4: " + num4); 

num5 *= 2; 
console.log("Multilication Assignment:" + num5 + " now num5: " + num5); 

console.log("---------------------");

// 3. Comparison Operators: (==, ===, !=, !==, >, <, >=, <=)

let a = 90;
let b = 70;
let c = 90;

console.log("a is equal to b: " + (a == b)); // Loose equality
console.log("a is equal to b: " + (a === c)); // Strict equality
console.log("a is not equal to b: " + (a !=b));
console.log("a is not equal to b: " + (a !== c)); // Strict inequality
console.log("a is smaller than b: " + (a < b ));

// 4. Logical Operators: (&&, ||, !)

console.log("logical And: " + (a < b && a >= c));
console.log("Logical AND: "+ (a > b && a == c));

console.log("logical OR: " + (a < b || a >= c));
console.log("Logical OR: " + (a < b || a != c ));
console.log("Logical OR: " + (a>b || a==c));

console.log("Logical NOT: " + !(a <b));
console.log("-----------------");

// 5. Bitwise Operators: (&, |, ^, ~, <<, >>, >>>)

//6. Ternary Operator: (condition ? exprIfTrue : exprIfFalse)
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);

// 7. Type Operators: (typeof, instanceof)

let name = "Amardeep";
console.log(typeof name); 

// 8. String Concatenation(Joining): (+)

let firstName = "Amardeep";
let lastName = "Rana";
console.log( firstName + " " + lastName);
console.log( firstName + " " + lastName);