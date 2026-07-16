// 26_Literal_Number_all.js
// All about Number types and representations in JavaScript

/*
  ============================================
  JavaScript has only ONE Number type
  ============================================
  - In JavaScript, all numbers are of type "number".
  - There is no separate int, float, double, or long type.
  - Internally, every number is stored as a 64-bit floating-point value
    (IEEE 754 standard).

  This means: 10, 10.5, 1e5, 0xFF, 0b1010 all have the same type: number
*/

// 1. Integer literals
let integer = 100;
console.log("Integer:", integer, "| Type:", typeof integer);

// 2. Floating point (decimal) literals
let decimal = 3.14;
console.log("Decimal:", decimal, "| Type:", typeof decimal);

// 3. Scientific notation (exponential form)
let scientific = 1.5e3;  // 1.5 * 1000 = 1500
console.log("Scientific (1.5e3):", scientific, "| Type:", typeof scientific);

let small = 1.5e-3;  // 0.0015
console.log("Scientific (1.5e-3):", small, "| Type:", typeof small);

// 4. Hexadecimal numbers (base 16) — prefix 0x or 0X
let hex = 0xFF;  // 255 in decimal
console.log("Hexadecimal (0xFF):", hex, "| Type:", typeof hex);

// 5. Octal numbers (base 8) — prefix 0o or 0O
let octal = 0o77;  // 63 in decimal
console.log("Octal (0o77):", octal, "| Type:", typeof octal);

// 6. Binary numbers (base 2) — prefix 0b or 0B
let binary = 0b1010;  // 10 in decimal
console.log("Binary (0b1010):", binary, "| Type:", typeof binary);

// 7. Special numeric values
console.log("\n--- Special Number Values ---");

// Infinity: result of dividing by zero or very large number
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
console.log("Infinity:", positiveInfinity, "| Type:", typeof positiveInfinity);
console.log("-Infinity:", negativeInfinity, "| Type:", typeof negativeInfinity);

// NaN: Not a Number, result of invalid math operation
let notANumber = NaN;
console.log("NaN:", notANumber, "| Type:", typeof notANumber);
console.log("0 / 0:", 0 / 0);  // NaN

// 8. BigInt (for very large integers)
// BigInt is a separate primitive type from number
let bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber, "| Type:", typeof bigNumber);

// 9. Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER
console.log("\n--- Number Limits ---");
console.log("Max Safe Integer:", Number.MAX_SAFE_INTEGER);
console.log("Min Safe Integer:", Number.MIN_SAFE_INTEGER);
console.log("Max Value:", Number.MAX_VALUE);
console.log("Min Value:", Number.MIN_VALUE);

// 10. Common number methods
console.log("\n--- Useful Number Methods ---");
let num = 3.14159;
console.log("toFixed(2):", num.toFixed(2));       // "3.14"
console.log("toString(2):", num.toString(2));     // binary string
console.log("isNaN('abc'):", Number.isNaN(Number('abc')));
console.log("isFinite(10):", Number.isFinite(10));
console.log("parseInt('100px'):", parseInt("100px"));   // 100
console.log("parseFloat('3.14abc'):", parseFloat("3.14abc")); // 3.14

/*
  ============================================
  Summary
  ============================================
  - JavaScript uses only the "number" type for all numeric values.
  - Numbers can be written as integers, decimals, scientific notation,
    hexadecimal, octal, or binary.
  - Special values: Infinity, -Infinity, NaN.
  - BigInt is used for very large whole numbers and is a separate type.
  - Use Number methods like toFixed(), parseInt(), parseFloat(), isNaN()
    for common operations.
*/
