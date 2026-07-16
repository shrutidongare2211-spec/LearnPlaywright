// 26_Literal_Number_all.js
// All number types, literals, and utilities supported in JavaScript

// ============================================================
// 1. INTEGER LITERALS
// ============================================================

let integerZero = 0;
console.log("Integer zero:", integerZero); // 0

let integerPositive = 42;
console.log("Integer positive:", integerPositive); // 42

let integerNegative = -25;
console.log("Integer negative:", integerNegative); // -25

let integerLarge = 999999;
console.log("Integer large:", integerLarge); // 999999

console.log("typeof 42:", typeof 42); // number

// ============================================================
// 2. FLOATING-POINT LITERALS
// ============================================================

let floatPi = 3.14;
console.log("Float pi:", floatPi); // 3.14

let floatNegative = -0.5;
console.log("Float negative:", floatNegative); // -0.5

let floatSmall = 0.0001;
console.log("Float small:", floatSmall); // 0.0001

let floatNoLeadingZero = .75;
console.log("Float .75:", floatNoLeadingZero); // 0.75

let floatNoTrailingZero = 5.;
console.log("Float 5.:", floatNoTrailingZero); // 5

console.log("typeof 3.14:", typeof 3.14); // number

// ============================================================
// 3. SCIENTIFIC NOTATION
// ============================================================

let sciThousand = 1e3;
console.log("1e3:", sciThousand); // 1000

let sciMillion = 1e6;
console.log("1e6:", sciMillion); // 1000000

let sciSmall = 5e-3;
console.log("5e-3:", sciSmall); // 0.005

let sciNegative = -4.2e4;
console.log("-4.2e4:", sciNegative); // -42000

// ============================================================
// 4. NUMERIC SEPARATORS
// ============================================================

let sepThousand = 1_000;
console.log("1_000:", sepThousand); // 1000

let sepMillion = 1_000_000;
console.log("1_000_000:", sepMillion); // 1000000

let sepBinary = 0b1010_1010;
console.log("0b1010_1010:", sepBinary); // 170

let sepHex = 0xFF_FF;
console.log("0xFF_FF:", sepHex); // 65535

// ============================================================
// 5. NUMBER BASES
// ============================================================

// Decimal (Base 10) - most common
let decimal = 42;
console.log("Decimal:", decimal); // 42

// Binary (Base 2) - starts with 0b or 0B
let binary = 0b1010;
console.log("Binary 0b1010:", binary); // 10

// Octal (Base 8) - starts with 0o or 0O
let octal = 0o77;
console.log("Octal 0o77:", octal); // 63

// Hexadecimal (Base 16) - starts with 0x or 0X
let hex = 0xFF;
console.log("Hexadecimal 0xFF:", hex); // 255

// ============================================================
// 6. BIGINT
// ============================================================

let bigLiteral = 100n;
console.log("BigInt literal:", bigLiteral); // 100n
console.log("typeof 100n:", typeof bigLiteral); // bigint

let bigFromNumber = BigInt(50);
console.log("BigInt(50):", bigFromNumber); // 50n

let bigFromString = BigInt("123456789012345678901234567890");
console.log("BigInt from string:", bigFromString); // 123456789012345678901234567890n

console.log("100n + 50n =", 100n + 50n); // 150n
console.log("100n * 2n =", 100n * 2n); // 200n

// ============================================================
// 7. SPECIAL VALUES
// ============================================================

let positiveInfinity = 1 / 0;
console.log("1 / 0:", positiveInfinity); // Infinity

let negativeInfinity = -1 / 0;
console.log("-1 / 0:", negativeInfinity); // -Infinity

let notANumber = 0 / 0;
console.log("0 / 0:", notANumber); // NaN

console.log("NaN === NaN:", NaN === NaN); // false
console.log("isNaN('abc'):", isNaN("abc")); // true
console.log("typeof NaN:", typeof NaN); // number

// ============================================================
// 8. NUMBER OBJECT WRAPPER
// ============================================================

let numObj = new Number(100);
console.log("typeof new Number(100):", typeof numObj); // object

let numPrimitive = 100;
console.log("typeof primitive 100:", typeof numPrimitive); // number

console.log("numObj.valueOf():", numObj.valueOf()); // 100
console.log("numObj == numPrimitive:", numObj == numPrimitive); // true
console.log("numObj === numPrimitive:", numObj === numPrimitive); // false

// ============================================================
// 9. NUMBER PROPERTIES
// ============================================================

console.log("Number.MAX_VALUE:", Number.MAX_VALUE); // 1.7976931348623157e+308
console.log("Number.MIN_VALUE:", Number.MIN_VALUE); // 5e-324
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log("Number.EPSILON:", Number.EPSILON); // 2.220446049250313e-16

// ============================================================
// 10. NUMBER METHODS
// ============================================================

console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("Number.isNaN('abc'):", Number.isNaN("abc")); // false
console.log("Number.isFinite(100):", Number.isFinite(100)); // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false
console.log("Number.isInteger(10):", Number.isInteger(10)); // true
console.log("Number.isInteger(10.5):", Number.isInteger(10.5)); // false

console.log("Number.parseInt('100px'):", Number.parseInt("100px")); // 100
console.log("Number.parseInt('FF', 16):", Number.parseInt("FF", 16)); // 255
console.log("Number.parseFloat('3.14abc'):", Number.parseFloat("3.14abc")); // 3.14

let num = 12345.6789;
console.log("num.toFixed(2):", num.toFixed(2)); // 12345.68
console.log("num.toPrecision(4):", num.toPrecision(4)); // 1.235e+4
console.log("num.toExponential(2):", num.toExponential(2)); // 1.23e+4
console.log("num.toString(16):", num.toString(16)); // 3039.adcc63f142

// ============================================================
// 11. MATH OBJECT
// ============================================================

console.log("Math.PI:", Math.PI); // 3.141592653589793
console.log("Math.E:", Math.E); // 2.718281828459045
console.log("Math.abs(-10):", Math.abs(-10)); // 10
console.log("Math.round(4.5):", Math.round(4.5)); // 5
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // 5
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4
console.log("Math.sqrt(16):", Math.sqrt(16)); // 4
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8
console.log("Math.random():", Math.random()); // random between 0 and 1
console.log("Random 1-10:", Math.floor(Math.random() * 10) + 1); // 1 to 10

// ============================================================
// 12. ARITHMETIC OPERATORS
// ============================================================

console.log("10 + 5:", 10 + 5); // 15
console.log("10 - 5:", 10 - 5); // 5
console.log("10 * 5:", 10 * 5); // 50
console.log("10 / 3:", 10 / 3); // 3.3333333333333335
console.log("10 % 3:", 10 % 3); // 1
console.log("2 ** 3:", 2 ** 3); // 8

// ============================================================
// 13. NUMBER PRECISION ISSUE
// ============================================================

console.log("0.1 + 0.2:", 0.1 + 0.2); // 0.30000000000000004
console.log("(0.1 + 0.2).toFixed(2):", (0.1 + 0.2).toFixed(2)); // 0.30

// ============================================================
// 14. NUMBERS WITH TEMPLATE LITERALS
// ============================================================

let quantity = 5;
let unitPrice = 12.5;
let total = quantity * unitPrice;
console.log(`Total: $${total.toFixed(2)}`); // Total: $62.50
