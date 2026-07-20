// ============================================================
// Topic: Confusing Comparison Cases (== vs ===) in JavaScript
// File: 38_Confusing_Comparison.js
// ============================================================

/*
  ONE SIMPLE EXPLANATION:

  ==  (Loose Equality)  -> compares VALUES only. It does TYPE COERCION first.
  === (Strict Equality) -> compares VALUE and TYPE. No type coercion.

  Think of it like this:
  - ==  -> "Are these values kind of equal?" (may convert types)
  - === -> "Are these exactly the same in value AND type?" (no conversion)

  Best Practice: Always use === to avoid confusing results.
*/


// --------------------------------------------------------
// 1. Number vs Boolean
// --------------------------------------------------------

console.log("0 == false  ->", 0 == false);   // true  -> 0 becomes false
console.log("0 === false ->", 0 === false);  // false -> different types

console.log("1 == true  ->", 1 == true);    // true  -> 1 becomes true
console.log("1 === true ->", 1 === true);   // false -> different types


// --------------------------------------------------------
// 2. Empty String vs Number / Boolean
// --------------------------------------------------------

console.log("'' == 0    ->", '' == 0);      // true  -> '' becomes 0
console.log("'' === 0   ->", '' === 0);     // false -> different types

console.log("'' == false  ->", '' == false);  // true  -> both become 0
console.log("'' === false ->", '' === false); // false -> different types


// --------------------------------------------------------
// 3. null and undefined
// --------------------------------------------------------

console.log("null == undefined  ->", null == undefined);   // true  -> special rule
console.log("null === undefined ->", null === undefined);  // false -> different types

console.log("null == 0  ->", null == 0);   // false -> null does NOT become 0
console.log("null == '' ->", null == '');  // false -> null does NOT become ''


// --------------------------------------------------------
// 4. NaN (Not a Number)
// --------------------------------------------------------

console.log("NaN == NaN  ->", NaN == NaN);   // false -> NaN is never equal to anything
console.log("NaN === NaN ->", NaN === NaN);  // false -> NaN is never equal to anything

// Use Number.isNaN() to check NaN
console.log("Number.isNaN(NaN) ->", Number.isNaN(NaN)); // true


// --------------------------------------------------------
// 5. Array and Object Comparisons
// --------------------------------------------------------

console.log("[] == false  ->", [] == false);   // true  -> [] becomes empty string -> 0 -> false
console.log("[] === false ->", [] === false);  // false -> different types

console.log("[1] == true  ->", [1] == true);   // true  -> [1] becomes "1" -> 1 -> true
console.log("[1] === true ->", [1] === true);  // false -> different types

console.log("[0] == false  ->", [0] == false);  // true  -> [0] becomes "0" -> 0 -> false
console.log("[0] === false ->", [0] === false); // false -> different types


// --------------------------------------------------------
// 6. String Number vs Number
// --------------------------------------------------------

console.log("'5' == 5   ->", '5' == 5);    // true  -> string becomes number
console.log("'5' === 5  ->", '5' === 5);   // false -> different types

console.log("'0' == false  ->", '0' == false);  // true  -> '0' becomes 0 -> false
console.log("'0' === false ->", '0' === false); // false -> different types


// --------------------------------------------------------
// 7. Quick Comparison Table
// --------------------------------------------------------

/*
  Expression              | == (Loose) | === (Strict) | Why?
  ------------------------|------------|--------------|----------------------------------------
  0 == false              | true       | false        | 0 converts to false
  1 == true               | true       | false        | 1 converts to true
  '' == 0                 | true       | false        | '' converts to 0
  '' == false             | true       | false        | both convert to 0
  null == undefined       | true       | false        | special JS rule
  NaN == NaN              | false      | false        | NaN is never equal
  [] == false             | true       | false        | [] -> '' -> 0 -> false
  [1] == true             | true       | false        | [1] -> '1' -> 1 -> true
  [0] == false            | true       | false        | [0] -> '0' -> 0 -> false
  '5' == 5                | true       | false        | '5' converts to 5
  '0' == false            | true       | false        | '0' -> 0 -> false
  null == 0               | false      | false        | null does not convert to 0
  undefined == false      | false      | false        | undefined does not convert to false
*/


// --------------------------------------------------------
// 8. Real Example
// --------------------------------------------------------

let userInput = "0";      // came from a form input (always string)
let zeroNumber = 0;

// Bug: using == can give unexpected result
if (userInput == false) {
  console.log("Loose check: userInput is falsy");
} else {
  console.log("Loose check: userInput is truthy");
}

// Safe: using === checks both value and type
if (userInput === false) {
  console.log("Strict check: userInput is false");
} else {
  console.log("Strict check: userInput is NOT false");
}


// --------------------------------------------------------
// 9. Best Practice
// --------------------------------------------------------

/*
  Always use === and !== in real code.
  == and != can cause hidden bugs because of type coercion.

  Use == only when you really want type coercion.
*/


// ============================================================
// END
// ============================================================
