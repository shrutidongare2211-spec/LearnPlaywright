// ============================================================
// Topic: Strings in JavaScript
// File: 27_String.js
// ============================================================

/*
  ONE SIMPLE EXPLANATION:

  A string is a sequence of characters used to represent text.
  In JavaScript, strings can be created using:
  - Single quotes ('')
  - Double quotes ("")
  - Backticks (``) -> also called Template Literals

  Single and double quotes are exactly the same.
  Use whichever you prefer, but be consistent in your project.
  Backticks are special because they allow variables and multi-line text.
*/


// --------------------------------------------------------
// 1. Single Quotes
// --------------------------------------------------------

let single = 'Hello World';
console.log("Single Quote:", single);

// Single quotes can contain double quotes inside without escaping
let withDouble = 'She said "hi"';
console.log("Single with double quote inside:", withDouble);


// --------------------------------------------------------
// 2. Double Quotes
// --------------------------------------------------------

let double = "Hello World";
console.log("Double Quote:", double);

// Double quotes can contain single quotes inside without escaping
let withSingle = "It's a test";
console.log("Double with single quote inside:", withSingle);


// --------------------------------------------------------
// 3. typeof String
// --------------------------------------------------------

let char = 'c';
let str = 'cc';

console.log("typeof 'c':", typeof char);  // "string"
console.log("typeof 'cc':", typeof str);  // "string"
console.log("typeof double:", typeof double);  // "string"


// --------------------------------------------------------
// 4. Quick Comparison
// --------------------------------------------------------

/*
  Feature              |  ''        |  ""        |  ``
  ---------------------|------------|------------|------------
  Simple text          |     ✓      |     ✓      |     ✓
  Contains ' inside    |     ✗      |     ✓      |     ✓
  Contains " inside    |     ✓      |     ✗      |     ✓
  Variable injection   |     ✗      |     ✗      |     ✓  -> ${var}
  Multi-line text      |     ✗      |     ✗      |     ✓
*/


// --------------------------------------------------------
// 5. Real Example
// --------------------------------------------------------

let username = "Shruti";

// Using double quotes (we need + to combine)
let msg1 = "Hello, " + username + "! Welcome to JavaScript.";

// Using backticks (cleaner way)
let msg2 = `Hello, ${username}! Welcome to JavaScript.`;

console.log("Using double quotes:", msg1);
console.log("Using backticks:", msg2);


// ============================================================
// END
// ============================================================
