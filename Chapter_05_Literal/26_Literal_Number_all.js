// 26_Literal_Number_all.js
// All number types, literals, and utilities supported in JavaScript
// This file includes both explanations and examples for easy learning.

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
/*
  Integer literals are whole numbers without a decimal point.
  They can be positive, negative, or zero.
  The typeof any numeric literal is "number".
*/
console.log("0:", 0);
console.log("10:", 10);
console.log("-25:", -25);
console.log("+50:", +50);
console.log("999999:", 999999);
console.log("typeof 42:", typeof 42);
console.log("typeof -100:", typeof -100);

let age = 30;
let year = 2024;
let negativeBalance = -500;
console.log("Age:", age, "| Year:", year, "| Balance:", negativeBalance);

console.log("\n=== 2. Floating Point Literals ===");
/*
  Floating point literals are numbers that contain a decimal point.
  JavaScript does not have a separate float or double type.
  You can also write .75 instead of 0.75, and 5. instead of 5.0,
  but it is better to use the full form for readability.
*/
console.log("3.14:", 3.14);
console.log("-0.5:", -0.5);
console.log("2.0:", 2.0);
console.log(".75:", .75);
console.log("5.:", 5.);
console.log("0.0001:", 0.0001);
console.log("12345.6789:", 12345.6789);
console.log("typeof 3.14:", typeof 3.14);

let price = 99.99;
let temperature = -5.5;
let taxRate = 0.18;
console.log("Price:", price, "| Temperature:", temperature, "| Tax Rate:", taxRate);

console.log("\n=== 3. Scientific Notation ===");
/*
  Scientific notation is a way to write very large or very small numbers.
  Format: mantissa e exponent
  1e3 means 1 * 10^3 = 1000
  5e-3 means 5 * 10^-3 = 0.005
*/
console.log("1e3:", 1e3, "// means 1 * 10^3");
console.log("1e6:", 1e6, "// means 1 * 10^6");
console.log("1.5e2:", 1.5e2, "// means 1.5 * 10^2");
console.log("2.5e-3:", 2.5e-3, "// means 2.5 * 10^-3");
console.log("5e-6:", 5e-6, "// means 5 * 10^-6");
console.log("-4.2e4:", -4.2e4, "// means -4.2 * 10^4");
console.log("3.5e8:", 3.5e8, "// means 3.5 * 10^8");

let million = 1e6;
let billion = 1e9;
let micro = 1e-6;
console.log("Million:", million, "| Billion:", billion, "| Micro:", micro);

console.log("\n=== 4. Numeric Separators ===");
/*
  Numeric separators use underscores (_) to make large numbers easier to read.
  The underscore is ignored by JavaScript.
  Supported in decimal, binary, octal, and hexadecimal numbers.
  BigInt literals can also use separators.
*/
console.log("1_000:", 1_000);
console.log("1_000_000:", 1_000_000);
console.log("1_000_000_000:", 1_000_000_000);
console.log("9_007_199_254_740_991:", 9_007_199_254_740_991);
console.log("0b1010_1010:", 0b1010_1010);
console.log("0xFF_00_00:", 0xFF_00_00);
console.log("0o7_7_7:", 0o7_7_7);

let salary = 75_000;
let population = 1_400_000_000;
console.log("Salary:", salary, "| Population:", population);

console.log("\n=== 5. Hexadecimal, Octal, Binary ===");
/*
  JavaScript supports numbers in different bases:
  - Hexadecimal (base 16): prefix 0x or 0X
  - Octal (base 8): prefix 0o or 0O
  - Binary (base 2): prefix 0b or 0B

  When printed, JavaScript converts them to decimal.
*/
console.log("Hexadecimal 0x0:", 0x0);
console.log("Hexadecimal 0xA:", 0xA, "// 10 in decimal");
console.log("Hexadecimal 0xFF:", 0xFF, "// 255 in decimal");
console.log("Hexadecimal 0xFF0000:", 0xFF0000, "// red color in RGB");
console.log("Hexadecimal 0xFFFFFF:", 0xFFFFFF, "// white color in RGB");

console.log("Octal 0o0:", 0o0);
console.log("Octal 0o7:", 0o7, "// 7 in decimal");
console.log("Octal 0o10:", 0o10, "// 8 in decimal");
console.log("Octal 0o77:", 0o77, "// 63 in decimal");

console.log("Binary 0b0:", 0b0);
console.log("Binary 0b1:", 0b1, "// 1 in decimal");
console.log("Binary 0b10:", 0b10, "// 2 in decimal");
console.log("Binary 0b1010:", 0b1010, "// 10 in decimal");
console.log("Binary 0b11111111:", 0b11111111, "// 255 in decimal");

let redColor = 0xFF0000;
let filePermissions = 0o755;
let binaryFlags = 0b1010;
console.log("Red color:", redColor, "| File permissions:", filePermissions, "| Binary flags:", binaryFlags);

console.log("\n=== 6. BigInt ===");
/*
  BigInt is a separate primitive type used for integers larger than
  Number.MAX_SAFE_INTEGER.
  A BigInt is created by adding 'n' at the end of a number or by calling BigInt().
  You cannot mix BigInt with regular Number in arithmetic operations.
*/
console.log("100n:", 100n, "| typeof:", typeof 100n);
console.log("9007199254740993n:", 9007199254740993n);
console.log("BigInt(50):", BigInt(50));
console.log("BigInt('123456789012345678901234567890'):", BigInt("123456789012345678901234567890"));
console.log("100n + 50n =", 100n + 50n);
console.log("100n - 50n =", 100n - 50n);
console.log("100n * 2n =", 100n * 2n);
console.log("100n / 3n =", 100n / 3n, "// BigInt division truncates");
console.log("100n % 3n =", 100n % 3n);

let hugeNumber = 123456789012345678901234567890n;
let anotherBig = 1000000000000000000n;
console.log("Huge number:", hugeNumber);
console.log("Huge + another:", hugeNumber + anotherBig);

console.log("\n=== 7. Special Values ===");
/*
  JavaScript has three special number values:
  - Infinity: result of dividing a positive number by zero
  - -Infinity: result of dividing a negative number by zero
  - NaN (Not a Number): result of an invalid mathematical operation

  Note: typeof NaN is "number", which can be confusing.
  NaN is the only value that is not equal to itself.
*/
console.log("1 / 0:", 1 / 0, "// Infinity");
console.log("-1 / 0:", -1 / 0, "// -Infinity");
console.log("0 / 0:", 0 / 0, "// NaN");
console.log("Infinity + 1:", Infinity + 1);
console.log("Infinity - Infinity:", Infinity - Infinity, "// undefined result becomes NaN");
console.log("Infinity * 0:", Infinity * 0, "// undefined result becomes NaN");
console.log("'abc' * 2:", "abc" * 2, "// NaN");
console.log("NaN + 5:", NaN + 5, "// any operation with NaN gives NaN");
console.log("NaN === NaN:", NaN === NaN, "// NaN is never equal to itself");
console.log("isNaN('abc'):", isNaN("abc"));
console.log("isNaN(123):", isNaN(123));

let result = "hello" / 2;
console.log("'hello' / 2:", result);
console.log("typeof Infinity:", typeof Infinity);
console.log("typeof NaN:", typeof NaN);

console.log("\n=== 8. Number Object Wrapper ===");
/*
  JavaScript provides a Number object wrapper: new Number(value).
  However, it is not recommended for normal use because it creates an object,
  not a primitive number.
  Always prefer primitive numbers for better performance and behavior.
*/
let numObj = new Number(100);
let numPrimitive = 100;

console.log("Number object:", numObj);
console.log("typeof Number object:", typeof numObj, "// object, not number");
console.log("typeof primitive:", typeof numPrimitive, "// number");
console.log("numObj.valueOf():", numObj.valueOf(), "// gets the primitive value");
console.log("numObj == numPrimitive:", numObj == numPrimitive, "// loose equality works");
console.log("numObj === numPrimitive:", numObj === numPrimitive, "// strict equality fails");

let numObj2 = new Number(200);
console.log("numObj2.valueOf():", numObj2.valueOf());
console.log("numObj2.toFixed(2):", numObj2.toFixed(2));

console.log("\n=== 9. Number Properties ===");
/*
  Number has built-in static properties that describe limits and constants.
  These are useful when working with very large or very small numbers.
*/
console.log("Number.MAX_VALUE:", Number.MAX_VALUE, "// largest finite number");
console.log("Number.MIN_VALUE:", Number.MIN_VALUE, "// smallest positive number");
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER, "// largest safe integer");
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER, "// smallest safe integer");
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("Number.NaN:", Number.NaN);
console.log("Number.EPSILON:", Number.EPSILON, "// smallest difference between two numbers");

console.log("Max safe + 1:", Number.MAX_SAFE_INTEGER + 1);
console.log("Max safe + 2:", Number.MAX_SAFE_INTEGER + 2);
console.log("Max safe + 3:", Number.MAX_SAFE_INTEGER + 3, "// precision loss starts here");

console.log("\n=== 10. Number Methods ===");
/*
  Number provides static methods and instance methods.
  Static methods: called on Number itself, e.g., Number.isNaN(x).
  Instance methods: called on a number value, e.g., num.toFixed(2).
*/

// Static methods
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number.isNaN('abc'):", Number.isNaN("abc"), "// does not coerce string to number");
console.log("Number.isNaN(undefined):", Number.isNaN(undefined));
console.log("Number.isFinite(100):", Number.isFinite(100));
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));
console.log("Number.isFinite(NaN):", Number.isFinite(NaN));
console.log("Number.isInteger(10):", Number.isInteger(10));
console.log("Number.isInteger(10.0):", Number.isInteger(10.0), "// 10.0 is still an integer");
console.log("Number.isInteger(10.5):", Number.isInteger(10.5));
console.log("Number.isSafeInteger(9007199254740991):", Number.isSafeInteger(9007199254740991));

console.log("Number.parseInt('100'):", Number.parseInt("100"));
console.log("Number.parseInt('100px'):", Number.parseInt("100px"), "// stops at non-digit");
console.log("Number.parseInt('3.14'):", Number.parseInt("3.14"), "// only integer part");
console.log("Number.parseInt('FF', 16):", Number.parseInt("FF", 16), "// base 16");
console.log("Number.parseInt('77', 8):", Number.parseInt("77", 8), "// base 8");
console.log("Number.parseInt('1010', 2):", Number.parseInt("1010", 2), "// base 2");
console.log("Number.parseFloat('3.14'):", Number.parseFloat("3.14"));
console.log("Number.parseFloat('3.14abc'):", Number.parseFloat("3.14abc"));
console.log("Number.parseFloat('   5.5  '):", Number.parseFloat("   5.5  "));

// Instance methods
let num = 12345.6789;
console.log("num.toFixed(0):", num.toFixed(0), "// rounds to 0 decimal places");
console.log("num.toFixed(2):", num.toFixed(2), "// returns string with 2 decimals");
console.log("num.toFixed(4):", num.toFixed(4));
console.log("num.toPrecision(2):", num.toPrecision(2), "// total 2 significant digits");
console.log("num.toPrecision(4):", num.toPrecision(4), "// total 4 significant digits");
console.log("num.toPrecision(6):", num.toPrecision(6), "// total 6 significant digits");
console.log("num.toExponential(2):", num.toExponential(2), "// scientific notation");
console.log("num.toExponential(4):", num.toExponential(4));
console.log("num.toString():", num.toString(), "// default base 10");
console.log("num.toString(2):", num.toString(2), "// binary string");
console.log("num.toString(8):", num.toString(8), "// octal string");
console.log("num.toString(16):", num.toString(16), "// hexadecimal string");
console.log("(100).toString(2):", (100).toString(2));
console.log("(255).toString(16):", (255).toString(16));

console.log("\n=== 11. Math Object ===");
/*
  The Math object provides mathematical constants and functions.
  It is not a constructor. You cannot create a new Math object.
  All Math methods are static.
*/
console.log("Math.PI:", Math.PI, "// ratio of circle's circumference to diameter");
console.log("Math.E:", Math.E, "// Euler's number");
console.log("Math.SQRT2:", Math.SQRT2, "// square root of 2");
console.log("Math.LN2:", Math.LN2, "// natural log of 2");
console.log("Math.LN10:", Math.LN10, "// natural log of 10");

console.log("Math.abs(-10):", Math.abs(-10), "// absolute value");
console.log("Math.abs(10):", Math.abs(10));
console.log("Math.round(4.4):", Math.round(4.4), "// rounds to nearest integer");
console.log("Math.round(4.5):", Math.round(4.5));
console.log("Math.round(4.6):", Math.round(4.6));
console.log("Math.floor(4.9):", Math.floor(4.9), "// rounds down");
console.log("Math.floor(-4.9):", Math.floor(-4.9));
console.log("Math.ceil(4.1):", Math.ceil(4.1), "// rounds up");
console.log("Math.ceil(-4.1):", Math.ceil(-4.1));
console.log("Math.trunc(4.9):", Math.trunc(4.9), "// removes decimal part");
console.log("Math.trunc(-4.9):", Math.trunc(-4.9));
console.log("Math.max(1, 5, 3):", Math.max(1, 5, 3));
console.log("Math.min(1, 5, 3):", Math.min(1, 5, 3));
console.log("Math.max(-10, -5, -1):", Math.max(-10, -5, -1));
console.log("Math.min(-10, -5, -1):", Math.min(-10, -5, -1));
console.log("Math.sqrt(16):", Math.sqrt(16), "// square root");
console.log("Math.sqrt(2):", Math.sqrt(2));
console.log("Math.cbrt(27):", Math.cbrt(27), "// cube root");
console.log("Math.cbrt(64):", Math.cbrt(64));
console.log("Math.pow(2, 3):", Math.pow(2, 3), "// 2 raised to power 3");
console.log("Math.pow(5, 2):", Math.pow(5, 2));
console.log("Math.pow(10, -1):", Math.pow(10, -1));

console.log("Math.random():", Math.random(), "// random number between 0 and 1");
console.log("Random 0-1:", Math.random());
console.log("Random 1-10:", Math.floor(Math.random() * 10) + 1);
console.log("Random 1-100:", Math.floor(Math.random() * 100) + 1);
console.log("Random 0-9:", Math.floor(Math.random() * 10));

console.log("Math.sin(0):", Math.sin(0));
console.log("Math.cos(0):", Math.cos(0));
console.log("Math.tan(0):", Math.tan(0));
console.log("Math.log(1):", Math.log(1), "// natural logarithm");
console.log("Math.log10(100):", Math.log10(100), "// base 10 logarithm");
console.log("Math.exp(1):", Math.exp(1), "// e raised to power 1");
console.log("Math.hypot(3, 4):", Math.hypot(3, 4), "// sqrt(3^2 + 4^2)");

console.log("\n=== 12. Arithmetic Examples ===");
/*
  JavaScript supports standard arithmetic operators.
  Operator precedence: parentheses > exponentiation > * / % > + -
*/
console.log("10 + 5:", 10 + 5);
console.log("10 - 5:", 10 - 5);
console.log("10 * 5:", 10 * 5);
console.log("10 / 5:", 10 / 5);
console.log("10 / 3:", 10 / 3);
console.log("10 % 3:", 10 % 3, "// remainder");
console.log("2 ** 3:", 2 ** 3, "// exponentiation");
console.log("16 ** 0.5:", 16 ** 0.5, "// square root using exponentiation");
console.log("10 + 5 * 2:", 10 + 5 * 2, "// multiplication first");
console.log("(10 + 5) * 2:", (10 + 5) * 2, "// parentheses first");

console.log("\n=== 13. Number Precision Issue ===");
/*
  Floating-point arithmetic in JavaScript is not always exact due to
  how numbers are stored in memory.
  A famous example is 0.1 + 0.2, which is slightly more than 0.3.
  Use toFixed() when you need a fixed number of decimal places.
*/
console.log("0.1 + 0.2:", 0.1 + 0.2);
console.log("(0.1 + 0.2).toFixed(2):", (0.1 + 0.2).toFixed(2));
console.log("(0.1 + 0.2) === 0.3:", (0.1 + 0.2) === 0.3);
console.log("(0.1 + 0.2).toFixed(2) === '0.30':", (0.1 + 0.2).toFixed(2) === '0.30');

console.log("\n=== 14. Numbers with Template Literals ===");
/*
  Template literals (backticks) make it easy to embed numbers in strings.
  You can also call methods inside ${}.
*/
let quantity = 5;
let unitPrice = 12.5;
let total = quantity * unitPrice;
console.log(`Quantity: ${quantity}`);
console.log(`Unit Price: $${unitPrice}`);
console.log(`Total: $${total.toFixed(2)}`);
console.log(`Rounded: ${Math.round(total)}`);

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
  - Be careful with floating-point precision (0.1 + 0.2 !== 0.3).
  - Use template literals to format numbers inside strings.
*/
