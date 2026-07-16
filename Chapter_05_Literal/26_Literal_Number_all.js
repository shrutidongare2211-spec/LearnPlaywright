// 26_Literal_Number_all.js
// All number types, literals, and utilities supported in JavaScript with examples

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
console.log("1e3:", 1e3);       // 1000
console.log("1e6:", 1e6);       // 1000000
console.log("1.5e2:", 1.5e2);   // 150
console.log("2.5e-3:", 2.5e-3); // 0.0025
console.log("5e-6:", 5e-6);     // 0.000005
console.log("-4.2e4:", -4.2e4); // -42000
console.log("3.5e8:", 3.5e8);   // 350000000

let million = 1e6;
let billion = 1e9;
let micro = 1e-6;
console.log("Million:", million, "| Billion:", billion, "| Micro:", micro);

console.log("\n=== 4. Numeric Separators ===");
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
console.log("Hexadecimal 0x0:", 0x0);
console.log("Hexadecimal 0xA:", 0xA);
console.log("Hexadecimal 0xFF:", 0xFF);
console.log("Hexadecimal 0xFF0000:", 0xFF0000);
console.log("Hexadecimal 0xFFFFFF:", 0xFFFFFF);

console.log("Octal 0o0:", 0o0);
console.log("Octal 0o7:", 0o7);
console.log("Octal 0o10:", 0o10);
console.log("Octal 0o77:", 0o77);

console.log("Binary 0b0:", 0b0);
console.log("Binary 0b1:", 0b1);
console.log("Binary 0b10:", 0b10);
console.log("Binary 0b1010:", 0b1010);
console.log("Binary 0b11111111:", 0b11111111);

let redColor = 0xFF0000;
let filePermissions = 0o755;
let binaryFlags = 0b1010;
console.log("Red color:", redColor, "| File permissions:", filePermissions, "| Binary flags:", binaryFlags);

console.log("\n=== 6. BigInt ===");
console.log("100n:", 100n, "| typeof:", typeof 100n);
console.log("9007199254740993n:", 9007199254740993n);
console.log("BigInt(50):", BigInt(50));
console.log("BigInt('123456789012345678901234567890'):", BigInt("123456789012345678901234567890"));
console.log("100n + 50n =", 100n + 50n);
console.log("100n - 50n =", 100n - 50n);
console.log("100n * 2n =", 100n * 2n);
console.log("100n / 3n =", 100n / 3n);
console.log("100n % 3n =", 100n % 3n);

let hugeNumber = 123456789012345678901234567890n;
let anotherBig = 1000000000000000000n;
console.log("Huge number:", hugeNumber);
console.log("Huge + another:", hugeNumber + anotherBig);

console.log("\n=== 7. Special Values ===");
console.log("1 / 0:", 1 / 0);
console.log("-1 / 0:", -1 / 0);
console.log("0 / 0:", 0 / 0);
console.log("Infinity + 1:", Infinity + 1);
console.log("Infinity - Infinity:", Infinity - Infinity);
console.log("Infinity * 0:", Infinity * 0);
console.log("'abc' * 2:", "abc" * 2);
console.log("NaN + 5:", NaN + 5);
console.log("NaN === NaN:", NaN === NaN);
console.log("isNaN('abc'):", isNaN("abc"));
console.log("isNaN(123):", isNaN(123));

let result = "hello" / 2;
console.log("'hello' / 2:", result);
console.log("typeof Infinity:", typeof Infinity);
console.log("typeof NaN:", typeof NaN);

console.log("\n=== 8. Number Object Wrapper ===");
let numObj = new Number(100);
let numPrimitive = 100;

console.log("Number object:", numObj);
console.log("typeof Number object:", typeof numObj);
console.log("typeof primitive:", typeof numPrimitive);
console.log("numObj.valueOf():", numObj.valueOf());
console.log("numObj == numPrimitive:", numObj == numPrimitive);
console.log("numObj === numPrimitive:", numObj === numPrimitive);

let numObj2 = new Number(200);
console.log("numObj2.valueOf():", numObj2.valueOf());
console.log("numObj2.toFixed(2):", numObj2.toFixed(2));

console.log("\n=== 9. Number Properties ===");
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("Number.NaN:", Number.NaN);
console.log("Number.EPSILON:", Number.EPSILON);

console.log("Max safe + 1:", Number.MAX_SAFE_INTEGER + 1);
console.log("Max safe + 2:", Number.MAX_SAFE_INTEGER + 2);
console.log("Max safe + 3:", Number.MAX_SAFE_INTEGER + 3);

console.log("\n=== 10. Number Methods ===");
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number.isNaN('abc'):", Number.isNaN("abc"));
console.log("Number.isNaN(undefined):", Number.isNaN(undefined));
console.log("Number.isFinite(100):", Number.isFinite(100));
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));
console.log("Number.isFinite(NaN):", Number.isFinite(NaN));
console.log("Number.isInteger(10):", Number.isInteger(10));
console.log("Number.isInteger(10.0):", Number.isInteger(10.0));
console.log("Number.isInteger(10.5):", Number.isInteger(10.5));
console.log("Number.isSafeInteger(9007199254740991):", Number.isSafeInteger(9007199254740991));

console.log("Number.parseInt('100'):", Number.parseInt("100"));
console.log("Number.parseInt('100px'):", Number.parseInt("100px"));
console.log("Number.parseInt('3.14'):", Number.parseInt("3.14"));
console.log("Number.parseInt('FF', 16):", Number.parseInt("FF", 16));
console.log("Number.parseInt('77', 8):", Number.parseInt("77", 8));
console.log("Number.parseInt('1010', 2):", Number.parseInt("1010", 2));
console.log("Number.parseFloat('3.14'):", Number.parseFloat("3.14"));
console.log("Number.parseFloat('3.14abc'):", Number.parseFloat("3.14abc"));
console.log("Number.parseFloat('   5.5  '):", Number.parseFloat("   5.5  "));

let num = 12345.6789;
console.log("num.toFixed(0):", num.toFixed(0));
console.log("num.toFixed(2):", num.toFixed(2));
console.log("num.toFixed(4):", num.toFixed(4));
console.log("num.toPrecision(2):", num.toPrecision(2));
console.log("num.toPrecision(4):", num.toPrecision(4));
console.log("num.toPrecision(6):", num.toPrecision(6));
console.log("num.toExponential(2):", num.toExponential(2));
console.log("num.toExponential(4):", num.toExponential(4));
console.log("num.toString():", num.toString());
console.log("num.toString(2):", num.toString(2));
console.log("num.toString(8):", num.toString(8));
console.log("num.toString(16):", num.toString(16));
console.log("(100).toString(2):", (100).toString(2));
console.log("(255).toString(16):", (255).toString(16));

console.log("\n=== 11. Math Object ===");
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.SQRT2:", Math.SQRT2);
console.log("Math.LN2:", Math.LN2);
console.log("Math.LN10:", Math.LN10);

console.log("Math.abs(-10):", Math.abs(-10));
console.log("Math.abs(10):", Math.abs(10));
console.log("Math.round(4.4):", Math.round(4.4));
console.log("Math.round(4.5):", Math.round(4.5));
console.log("Math.round(4.6):", Math.round(4.6));
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.floor(-4.9):", Math.floor(-4.9));
console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Math.ceil(-4.1):", Math.ceil(-4.1));
console.log("Math.trunc(4.9):", Math.trunc(4.9));
console.log("Math.trunc(-4.9):", Math.trunc(-4.9));
console.log("Math.max(1, 5, 3):", Math.max(1, 5, 3));
console.log("Math.min(1, 5, 3):", Math.min(1, 5, 3));
console.log("Math.max(-10, -5, -1):", Math.max(-10, -5, -1));
console.log("Math.min(-10, -5, -1):", Math.min(-10, -5, -1));
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.sqrt(2):", Math.sqrt(2));
console.log("Math.cbrt(27):", Math.cbrt(27));
console.log("Math.cbrt(64):", Math.cbrt(64));
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("Math.pow(5, 2):", Math.pow(5, 2));
console.log("Math.pow(10, -1):", Math.pow(10, -1));

console.log("Math.random():", Math.random());
console.log("Random 0-1:", Math.random());
console.log("Random 1-10:", Math.floor(Math.random() * 10) + 1);
console.log("Random 1-100:", Math.floor(Math.random() * 100) + 1);
console.log("Random 0-9:", Math.floor(Math.random() * 10));

console.log("Math.sin(0):", Math.sin(0));
console.log("Math.cos(0):", Math.cos(0));
console.log("Math.tan(0):", Math.tan(0));
console.log("Math.log(1):", Math.log(1));
console.log("Math.log10(100):", Math.log10(100));
console.log("Math.exp(1):", Math.exp(1));
console.log("Math.hypot(3, 4):", Math.hypot(3, 4));

console.log("\n=== 12. Arithmetic Examples ===");
console.log("10 + 5:", 10 + 5);
console.log("10 - 5:", 10 - 5);
console.log("10 * 5:", 10 * 5);
console.log("10 / 5:", 10 / 5);
console.log("10 / 3:", 10 / 3);
console.log("10 % 3:", 10 % 3);
console.log("2 ** 3:", 2 ** 3);
console.log("16 ** 0.5:", 16 ** 0.5);
console.log("10 + 5 * 2:", 10 + 5 * 2);
console.log("(10 + 5) * 2:", (10 + 5) * 2);

console.log("\n=== 13. Number Precision Issue ===");
console.log("0.1 + 0.2:", 0.1 + 0.2);
console.log("(0.1 + 0.2).toFixed(2):", (0.1 + 0.2).toFixed(2));
console.log("(0.1 + 0.2) === 0.3:", (0.1 + 0.2) === 0.3);
console.log("(0.1 + 0.2).toFixed(2) === '0.30':", (0.1 + 0.2).toFixed(2) === '0.30');

console.log("\n=== 14. Numbers with Template Literals ===");
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
*/
