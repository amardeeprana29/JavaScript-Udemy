/* Operator Precedence in JavaScript
Operator precedence determines the order in which operators are evaluated in an expression. In JavaScript, operators with higher precedence are evaluated before those with lower precedence. Here’s a brief overview of operator precedence from highest to lowest:
1. Parentheses: `()`                                  left to right
2. Unary operators: !, typeof, ++, --                 right to left
3. Exponentiation: `**`                               right to left
4. Multiplication and Division: `*`, `/`, `%`         left to right
5. Addition and Subtraction: `+`, `-`                 left to right
6. Comparison: `===`, `!==`, `>`, `<`, `>=`, `<=`     left to right
7. Logical AND: `&&`                                  left to right
8. Logical OR: `||`                                   left to right
9. Ternary operator: `? :`                            right to left
10. Assignment: `=`, `+=`, `-=`, `*=`, `/=`,          right to left
11. Comma: `,`                                        left to right
*/

let x = 10 + 5 - 8 * 6 / 14 % 8 ** 2;

/* steps : 10 + 5 - 8 * 6 / 14 % 8 ** 2
  10 + 5 - 8 * 6 / 14 % (8 ** 2)
  10 + 5 - (8 * 6) / 14 % 64   L to R bcz same precedence
  10 + 5 - (48 / 14) % 64
  10 + 5 - (3.4285714285714284 % 64)
  (10 + 5) - 3.4285714285714284
    15 - 3.4285714285714284
    11.571428571428571
 */

console.log("Result of expression: " + x);