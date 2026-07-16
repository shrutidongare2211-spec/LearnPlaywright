// 26_Literal_Number_all.js
// All number types, literals, and utilities supported in JavaScript

/*
  ============================================
  Important Note
  ============================================
  JavaScript has only ONE primitive number type: "number".
  All numbers (integers, decimals, hex, octal, binary) are stored as
  64-bit floating-point values (IEEE 754 standard).

  BigInt is a separate primitive type used for very large whole numbers.
*/

console.log("=== 1. Integer Literals ===");
let int1 = 0;
let int2 = 42;
let int3 = -100;
let int4 = 9999999;

console.log("Zero:", int1);
console.log("Positive integer:", int2);
console.log("Negative integer:", int3);
console.log("Large integer:", int4);
console.log("typeof 42:", typeof 42);

console.log("\n=== 2. Floating Point Literals ===");
let float1 = 3.14;
let float2 = -0.5;
let float3 = 2.0;
let float4 = .75;  // valid but avoid in real code

console.log("Pi:", float1);
console.log("Negative decimal:", float2);
console.log("Decimal 2.0:", float3);
console.log("Decimal .75:", float4);
console.log("typeof 3.14:", typeof 3.14);

console.log("\n=== 3. Scientific Notation ===");
let sci1 = 1e3;   // 1000
let sci2 = 1.5e2; // 150
let sci3 = 5e-3;  // 0.005

console.log("1e3:", sci1);
console.log("1.5e2:", sci2);
console.log("5e-3:", sci3);

console.log("\n=== 4. Numeric Separators ===");
let separator1 = 1_000_000;
let separator2 = 9_007_199_254_740_991;
let separator3 = 0b1010_1010;
let separator4 = 0xFF_FF;

console.log("One million:", separator1);
console.log("Large with separator:", separator2);
console.log("Binary with separator:", separator3);
console.log("Hex with separator:", separator4);

console.log("\n=== 5. Hexadecimal, Octal, Binary ===");
let hex = 0xFF;      // 255
let octal = 0o77;    // 63
let binary = 0b1010; // 10

console.log("Hexadecimal 0xFF:", hex);
console.log("Octal 0o77:", octal);
console.log("Binary 0b1010:", binary);

console.log("\n=== 6. BigInt ===");
let big1 = 100n;
let big2 = 9007199254740993n;
let big3 = BigInt("123456789012345678901234567890");

console.log("BigInt 100n:", big1, "| typeof:", typeof big1);
console.log("BigInt literal:", big2);
console.log("BigInt from string:", big3);
console.log("100n + 50n =", 100n + 50n);

console.log("\n=== 7. Special Values ===");
console.log("1 / 0:", 1 / 0);             // Infinity
console.log("-1 / 0:", -1 / 0);           // -Infinity
console.log("0 / 0:", 0 / 0);             // NaN
console.log("Infinity - Infinity:", Infinity - Infinity); // NaN
console.log("NaN === NaN:", NaN === NaN); // false

console.log("\n=== 8. Number Object Wrapper ===");
let numObj = new Number(100);
let numPrimitive = 100;

console.log("Number object:", numObj);
console.log("typeof Number object:", typeof numObj);
console.log("typeof primitive:", typeof numPrimitive);
console.log("numObj.valueOf():", numObj.valueOf());
console.log("numObj == numPrimitive:", numObj == numPrimitive);
console.log("numObj === numPrimitive:", numObj === numPrimitive);

console.log("\n=== 9. Number Properties ===");
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("Number.EPSILON:", Number.EPSILON);

console.log("\n=== 10. Number Methods ===");
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number.isFinite(100):", Number.isFinite(100));
console.log("Number.isInteger(10):", Number.isInteger(10));
console.log("Number.isInteger(10.5):", Number.isInteger(10.5));
console.log("Number.parseInt('100px'):", Number.parseInt("100px"));
console.log("Number.parseFloat('3.14abc'):", Number.parseFloat("3.14abc"));

let num = 12345.6789;
console.log("num.toFixed(2):", num.toFixed(2));
console.log("num.toPrecision(4):", num.toPrecision(4));
console.log("num.toExponential(2):", num.toExponential(2));
console.log("num.toString(16):", num.toString(16));

console.log("\n=== 11. Math Object ===");
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.abs(-10):", Math.abs(-10));
console.log("Math.round(4.5):", Math.round(4.5));
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Math.trunc(4.9):", Math.trunc(4.9));
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("Math.random():", Math.random());
console.log("Random 1-10:", Math.floor(Math.random() * 10) + 1);

/*
  ============================================
  Summary
  ============================================
  - JavaScript has one number type: number.
  - Number literals: integer, float, scientific, hex, octal, binary.
  - Numeric separators (_) improve readability.
  - BigInt is a separate type for very large integers.
  - Special values: Infinity, -Infinity, NaN.
  - Number provides properties, methods, and an object wrapper.
  - Math object provides constants and mathematical functions.
*/
