// ============================================================
// Topic: Template Literals (Backticks) in JavaScript
// File: 28_Template_Literal.js
// ============================================================

/*
  ONE SIMPLE EXPLANATION:

  Template literals are strings written using backticks (``).
  They are more powerful than single/double quotes because they allow:
  - Variable interpolation: ${variable}
  - Multi-line strings
  - Expressions inside ${}

  Think of it like this:
  - '' or "" -> Plain text
  - ``       -> Smart text (can inject values & line breaks)
*/


// --------------------------------------------------------
// 1. Basic Variable Interpolation
// --------------------------------------------------------

let firstName = "Shruti";
let fullName = `Hi ${firstName} Dongare`;

console.log("Basic interpolation:", fullName);


// --------------------------------------------------------
// 2. Expressions Inside ${}
// --------------------------------------------------------

let a = 10;
let b = 20;

let sum = `10 + 20 = ${a + b}`;
console.log("Expression inside template:", sum);


// --------------------------------------------------------
// 3. Multi-line String
// --------------------------------------------------------

let multiLine = `
  Line 1
  Line 2
  Line 3
`;

console.log("Multi-line string:", multiLine);


// --------------------------------------------------------
// 4. Practical Example: Dynamic API URL
// --------------------------------------------------------

let env = "staging";
env = "prod";
const userId = 12345;

const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log("Dynamic API URL:", apiUrl);


// --------------------------------------------------------
// 5. Practical Example: Playwright Locator
// --------------------------------------------------------

const rowIndex = 3;
const columnName = "email";

// Dynamic locator using template literal
const locator = `[data-row="${rowIndex}"] [data-col="${columnName}"]`;
console.log("Playwright locator:", locator);


// --------------------------------------------------------
// 6. Practical Example: Test Log Message
// --------------------------------------------------------

const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;

console.log(`[${status}] ${testName} completed in ${duration}s`);


// --------------------------------------------------------
// 7. Practical Example: Screenshot File Name
// --------------------------------------------------------

const testCase = "checkout_flow";
const timestamp = Date.now();

const screenshotPath = `screenshots/${testCase}_${timestamp}.png`;
console.log("Screenshot path:", screenshotPath);


// --------------------------------------------------------
// 8. Quick Comparison
// --------------------------------------------------------

/*
  Feature              |  '' or ""  |  ``
  ---------------------|------------|------------
  Simple text          |     ✓      |   ✓
  Variable injection   |     ✗      |   ✓  -> ${var}
  Multi-line           |     ✗      |   ✓
  Expression inside    |     ✗      |   ✓  -> ${a + b}
  Dynamic values       |  Hard      |  Easy
*/


// --------------------------------------------------------
// 9. Real Example: Old Way vs New Way
// --------------------------------------------------------

let product = "Laptop";
let price = 50000;

// Old way using double quotes and +
let oldWay = "The " + product + " costs " + price + " rupees.";

// New way using template literals
let newWay = `The ${product} costs ${price} rupees.`;

console.log("Old way:", oldWay);
console.log("New way:", newWay);


// ============================================================
// END
// ============================================================
