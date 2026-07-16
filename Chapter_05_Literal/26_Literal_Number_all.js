// 26_Literal_Number_all.js
// All about Number types and representations in JavaScript with many examples

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

console.log("=== 1. Integer Examples ===");
let a = 0;
let b = 10;
let c = -25;
let d = 999999;
let e = +50;

console.log("Zero:", a, "| Type:", typeof a);
console.log("Positive integer:", b, "| Type:", typeof b);
console.log("Negative integer:", c, "| Type:", typeof c);
console.log("Large integer:", d, "| Type:", typeof d);
console.log("Integer with + sign:", e, "| Type:", typeof e);

console.log("\n=== 2. Decimal / Floating Point Examples ===");
let pi = 3.14;
let price = 99.99;
let temperature = -5.5;
let smallDecimal = 0.0001;
let largeDecimal = 12345.6789;
let zeroBeforeDecimal = 0.5;
let noZeroBeforeDecimal = .75;

console.log("Pi:", pi);
console.log("Price:", price);
console.log("Temperature:", temperature);
console.log("Small decimal:", smallDecimal);
console.log("Large decimal:", largeDecimal);
console.log("0.5:", zeroBeforeDecimal);
console.log(".75:", noZeroBeforeDecimal);

console.log("\n=== 3. Scientific Notation Examples ===");
let thousand = 1e3;       // 1 * 10^3 = 1000
let million = 1e6;        // 1 * 10^6 = 1000000
let tiny = 1e-3;          // 1 / 10^3 = 0.001
let veryTiny = 2.5e-6;    // 0.0000025
let bigScientific = 3.5e8; // 350000000
let negativeScientific = -4.2e4; // -42000

console.log("1e3:", thousand);
console.log("1e6:", million);
console.log("1e-3:", tiny);
console.log("2.5e-6:", veryTiny);
console.log("3.5e8:", bigScientific);
console.log("-4.2e4:", negativeScientific);

console.log("\n=== 4. Hexadecimal Examples (Base 16) ===");
let hexRed = 0xFF0000;    // Red color in RGB
let hexGreen = 0x00FF00;  // Green color in RGB
let hexBlue = 0x0000FF;   // Blue color in RGB
let hexWhite = 0xFFFFFF;
let hexSmall = 0xA;

console.log("0xFF0000:", hexRed);
console.log("0x00FF00:", hexGreen);
console.log("0x0000FF:", hexBlue);
console.log("0xFFFFFF:", hexWhite);
console.log("0xA:", hexSmall);

console.log("\n=== 5. Octal Examples (Base 8) ===");
let octalSeven = 0o7;
let octalTen = 0o10;      // 8 in decimal
let octalTwenty = 0o24;   // 20 in decimal
let octalSeventySeven = 0o77; // 63 in decimal

console.log("0o7:", octalSeven);
console.log("0o10:", octalTen);
console.log("0o24:", octalTwenty);
console.log("0o77:", octalSeventySeven);

console.log("\n=== 6. Binary Examples (Base 2) ===");
let binaryZero = 0b0;
let binaryOne = 0b1;
let binaryTwo = 0b10;
let binaryFive = 0b101;
let binaryTen = 0b1010;
let binarySixteen = 0b10000;
let binaryTwoFiftyFive = 0b11111111;

console.log("0b0:", binaryZero);
console.log("0b1:", binaryOne);
console.log("0b10:", binaryTwo);
console.log("0b101:", binaryFive);
console.log("0b1010:", binaryTen);
console.log("0b10000:", binarySixteen);
console.log("0b11111111:", binaryTwoFiftyFive);

console.log("\n=== 7. Basic Arithmetic Examples ===");
console.log("10 + 5 =", 10 + 5);
console.log("10 - 5 =", 10 - 5);
console.log("10 * 5 =", 10 * 5);
console.log("10 / 5 =", 10 / 5);
console.log("10 / 3 =", 10 / 3);
console.log("10 % 3 =", 10 % 3);
console.log("2 ** 3 =", 2 ** 3);
console.log("16 ** 0.5 =", 16 ** 0.5); // square root

console.log("\n=== 8. Special Number Values ===");
console.log("1 / 0:", 1 / 0);          // Infinity
console.log("-1 / 0:", -1 / 0);        // -Infinity
console.log("Infinity + 1:", Infinity + 1);
console.log("Infinity - Infinity:", Infinity - Infinity); // NaN
console.log("0 / 0:", 0 / 0);          // NaN
console.log("'abc' * 2:", "abc" * 2);  // NaN
console.log("NaN + 5:", NaN + 5);      // NaN
console.log("typeof Infinity:", typeof Infinity);
console.log("typeof NaN:", typeof NaN);

console.log("\n=== 9. Number Limits ===");
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("MAX_VALUE:", Number.MAX_VALUE);
console.log("MIN_VALUE:", Number.MIN_VALUE);
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);

console.log("\n=== 10. BigInt Examples ===");
let big1 = 100n;
let big2 = 9007199254740993n;
let big3 = 123456789012345678901234567890n;
let bigFromNumber = BigInt(50);

console.log("BigInt 100n:", big1, "| Type:", typeof big1);
console.log("BigInt large:", big2);
console.log("BigInt very large:", big3);
console.log("BigInt from number:", bigFromNumber);
console.log("100n + 50n =", big1 + 50n);
console.log("100n * 2n =", big1 * 2n);

console.log("\n=== 11. Number Conversion Examples ===");
console.log("Number('100'):", Number("100"));
console.log("Number('3.14'):", Number("3.14"));
console.log("Number(''):", Number(""));
console.log("Number('abc'):", Number("abc"));
console.log("Number(true):", Number(true));
console.log("Number(false):", Number(false));
console.log("Number(null):", Number(null));
console.log("Number(undefined):", Number(undefined));

console.log("\n=== 12. Parsing String to Number Examples ===");
console.log("parseInt('100'):", parseInt("100"));
console.log("parseInt('100px'):", parseInt("100px"));
console.log("parseInt('3.14'):", parseInt("3.14"));
console.log("parseInt('FF', 16):", parseInt("FF", 16));
console.log("parseInt('77', 8):", parseInt("77", 8));
console.log("parseInt('1010', 2):", parseInt("1010", 2));
console.log("parseFloat('3.14'):", parseFloat("3.14"));
console.log("parseFloat('3.14abc'):", parseFloat("3.14abc"));
console.log("parseFloat('   5.5  '):", parseFloat("   5.5  "));

console.log("\n=== 13. Formatting Number Examples ===");
let num = 12345.6789;
console.log("Original:", num);
console.log("toFixed(0):", num.toFixed(0));
console.log("toFixed(2):", num.toFixed(2));
console.log("toFixed(4):", num.toFixed(4));
console.log("toPrecision(4):", num.toPrecision(4));
console.log("toPrecision(6):", num.toPrecision(6));
console.log("toString():", num.toString());
console.log("toString(2):", num.toString(2));   // binary
console.log("toString(8):", num.toString(8));   // octal
console.log("toString(16):", num.toString(16)); // hexadecimal

console.log("\n=== 14. Checking Number Examples ===");
console.log("Number.isInteger(10):", Number.isInteger(10));
console.log("Number.isInteger(10.5):", Number.isInteger(10.5));
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number.isNaN('abc'):", Number.isNaN("abc"));
console.log("Number.isFinite(100):", Number.isFinite(100));
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));
console.log("Number.isFinite(NaN):", Number.isFinite(NaN));

console.log("\n=== 15. Math Object Examples ===");
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.round(4.4):", Math.round(4.4));
console.log("Math.round(4.5):", Math.round(4.5));
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Math.trunc(4.9):", Math.trunc(4.9));
console.log("Math.abs(-10):", Math.abs(-10));
console.log("Math.max(1, 5, 3):", Math.max(1, 5, 3));
console.log("Math.min(1, 5, 3):", Math.min(1, 5, 3));
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("Math.random():", Math.random());
console.log("Random 1-10:", Math.floor(Math.random() * 10) + 1);

console.log("\n=== 16. Number Precision Example ===");
console.log("0.1 + 0.2:", 0.1 + 0.2);
console.log("Fixed 0.1 + 0.2:", (0.1 + 0.2).toFixed(2));

console.log("\n=== 17. Number in Template Literals ===");
let quantity = 5;
let unitPrice = 12.5;
let total = quantity * unitPrice;
console.log(`Quantity: ${quantity}`);
console.log(`Unit Price: $${unitPrice}`);
console.log(`Total: $${total.toFixed(2)}`);

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
  - Math object provides many useful mathematical functions.
*/
