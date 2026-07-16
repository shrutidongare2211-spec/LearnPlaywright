// 26_Literal_Number_all.js
// Number types, literals, and utilities in JavaScript

console.log("=== 1. Integer Literals ===");
// Whole numbers without a decimal point
let positiveInt = 100;
let negativeInt = -50;
let zero = 0;
let largeInt = 123456789;

console.log("Positive integer:", positiveInt);
console.log("Negative integer:", negativeInt);
console.log("Zero:", zero);
console.log("Large integer:", largeInt);
console.log("typeof 100:", typeof 100);

console.log("\n=== 2. Floating Point Literals ===");
// Numbers with a decimal point
let pi = 3.14159;
let price = 99.99;
let negativeFloat = -10.5;
let smallFloat = 0.001;
let floatWithoutLeadingZero = .75; // valid but less readable
let floatWithoutTrailingZero = 5.; // valid, equals 5.0

console.log("Pi:", pi);
console.log("Price:", price);
console.log("Negative float:", negativeFloat);
console.log("Small float:", smallFloat);
console.log("Without leading zero:", floatWithoutLeadingZero);
console.log("Without trailing zero:", floatWithoutTrailingZero);
console.log("typeof 3.14:", typeof 3.14);

console.log("\n=== 3. Numeric Separators ===");
// Underscore (_) can be used as a separator for readability
let oneMillion = 1_000_000;
let oneBillion = 1_000_000_000;
let binaryWithSeparator = 0b1010_1010;
let hexWithSeparator = 0xFF_FF;
let bigIntWithSeparator = 9_007_199_254_740_991n;

console.log("One million:", oneMillion);
console.log("One billion:", oneBillion);
console.log("Binary with separator:", binaryWithSeparator);
console.log("Hex with separator:", hexWithSeparator);
console.log("BigInt with separator:", bigIntWithSeparator);

console.log("\n=== 4. BigInt ===");
// BigInt is used for very large whole numbers
let big1 = 100n;
let big2 = 123456789012345678901234567890n;
let bigFromNumber = BigInt(50);
let bigFromString = BigInt("9007199254740993");

console.log("BigInt 100n:", big1, "| typeof:", typeof big1);
console.log("Very large BigInt:", big2);
console.log("BigInt from number:", bigFromNumber);
console.log("BigInt from string:", bigFromString);
console.log("100n + 50n =", 100n + 50n);
console.log("100n * 2n =", 100n * 2n);
// console.log(100n + 50); // Error: Cannot mix BigInt and other types

console.log("\n=== 5. Special Values ===");
// Infinity, -Infinity, and NaN
console.log("1 / 0:", 1 / 0);               // Infinity
console.log("-1 / 0:", -1 / 0);             // -Infinity
console.log("Infinity + 1:", Infinity + 1);
console.log("Infinity - Infinity:", Infinity - Infinity); // NaN
console.log("0 / 0:", 0 / 0);               // NaN
console.log("'abc' * 2:", "abc" * 2);       // NaN
console.log("NaN === NaN:", NaN === NaN);   // false
console.log("isNaN('abc'):", isNaN("abc")); // true

console.log("\n=== 6. Number Object Wrapper ===");
// Number can also be used as an object wrapper (not recommended usually)
let numObj = new Number(123);
let numPrimitive = 123;

console.log("Number object:", numObj);
console.log("typeof Number object:", typeof numObj);     // object
console.log("typeof primitive:", typeof numPrimitive);   // number
console.log("numObj.valueOf():", numObj.valueOf());      // 123
console.log("numObj == numPrimitive:", numObj == numPrimitive);   // true
console.log("numObj === numPrimitive:", numObj === numPrimitive); // false

console.log("\n=== 7. Number Properties ===");
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("Number.NaN:", Number.NaN);
console.log("Number.EPSILON:", Number.EPSILON);

console.log("\n=== 8. Number Methods ===");
// Number static methods
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number.isNaN('abc'):", Number.isNaN("abc"));
console.log("Number.isFinite(100):", Number.isFinite(100));
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));
console.log("Number.isInteger(10):", Number.isInteger(10));
console.log("Number.isInteger(10.5):", Number.isInteger(10.5));
console.log("Number.parseInt('100px'):", Number.parseInt("100px"));
console.log("Number.parseFloat('3.14abc'):", Number.parseFloat("3.14abc"));
console.log("Number.parseInt('FF', 16):", Number.parseInt("FF", 16));

// Instance methods
let num = 12345.6789;
console.log("num.toFixed(2):", num.toFixed(2));
console.log("num.toFixed(0):", num.toFixed(0));
console.log("num.toPrecision(4):", num.toPrecision(4));
console.log("num.toExponential(2):", num.toExponential(2));
console.log("num.toString():", num.toString());
console.log("num.toString(16):", num.toString(16));
console.log("(100).toString(2):", (100).toString(2));

console.log("\n=== 9. Math Object ===");
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.abs(-10):", Math.abs(-10));
console.log("Math.round(4.4):", Math.round(4.4));
console.log("Math.round(4.5):", Math.round(4.5));
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Math.trunc(4.9):", Math.trunc(4.9));
console.log("Math.max(1, 5, 3):", Math.max(1, 5, 3));
console.log("Math.min(1, 5, 3):", Math.min(1, 5, 3));
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.cbrt(27):", Math.cbrt(27));
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("Math.random():", Math.random());
console.log("Random 1 to 10:", Math.floor(Math.random() * 10) + 1);

/*
  ============================================
  Quick Summary
  ============================================
  - Integer literals: whole numbers like 10, -5, 0
  - Floating point literals: numbers with decimals like 3.14, .75
  - Numeric separators: use _ for readability like 1_000_000
  - BigInt: for very large whole numbers, ends with n or uses BigInt()
  - Special values: Infinity, -Infinity, NaN
  - Number object wrapper: new Number(value) — avoid in normal code
  - Number properties: MAX_VALUE, MIN_VALUE, MAX_SAFE_INTEGER, etc.
  - Number methods: isNaN, isFinite, isInteger, parseInt, parseFloat, toFixed, etc.
  - Math object: provides constants and mathematical functions
*/
