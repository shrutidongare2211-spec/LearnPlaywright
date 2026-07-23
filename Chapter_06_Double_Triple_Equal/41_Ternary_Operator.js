// ============================================================
// Topic: Ternary Operator in JavaScript
// File: 41_Ternary_Operator.js
// ============================================================

/*
  ONE SIMPLE EXPLANATION:

  Ternary operator is a short way to write if-else in one line.

  Syntax:
    condition ? value_if_true : value_if_false

  Think of it like this:
  - if condition is true  -> take the first value
  - if condition is false -> take the second value

  Best for simple decisions, not for nested complex logic.
*/


// --------------------------------------------------------
// 1. Ternary Operator Basics
// --------------------------------------------------------

let age = 20;

// Check if person is adult or minor
let status = age >= 18 ? "Adult" : "Minor";
console.log("Age status:", status); // Adult


// --------------------------------------------------------
// 2. Maximum Between Two Numbers
// --------------------------------------------------------

let num1 = 45;
let num2 = 78;

// If num1 > num2, max is num1, else max is num2
let maxTwo = num1 > num2 ? num1 : num2;

console.log(`Numbers: ${num1}, ${num2}`);
console.log("Maximum of two numbers:", maxTwo);


// --------------------------------------------------------
// 3. Maximum Between Three Numbers
// --------------------------------------------------------

let a = 12;
let b = 45;
let c = 30;

// First compare a and b, then compare result with c
let maxThree = (a > b ? a : b) > c ? (a > b ? a : b) : c;

console.log(`Numbers: ${a}, ${b}, ${c}`);
console.log("Maximum of three numbers:", maxThree);


// --------------------------------------------------------
// 4. Another Way to Write Max of Three
// --------------------------------------------------------

// Using a variable to store intermediate result
let tempMax = a > b ? a : b;
let finalMax = tempMax > c ? tempMax : c;

console.log("Max using intermediate variable:", finalMax);


// --------------------------------------------------------
// 5. Quick Comparison
// --------------------------------------------------------

/*
  Task                  | if-else way        | ternary way
  ----------------------|--------------------|------------------------------
  Max of 2 numbers      | longer             | (a > b) ? a : b
  Max of 3 numbers      | longer             | ((a > b ? a : b) > c) ? ... : c
  Simple yes/no         | if-else block      | condition ? true : false
*/


// --------------------------------------------------------
// 6. Real Example
// --------------------------------------------------------

let marks = 85;

let result = marks >= 40 ? "Pass" : "Fail";
console.log(`Marks: ${marks}, Result: ${result}`);


// ============================================================
// END
// ============================================================
