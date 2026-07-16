// null vs undefined in JavaScript

/*
  ============================================
  null
  ============================================
  - null means "empty" or "no value".
  - It is assigned intentionally by the programmer.
  - It is a primitive value.
  - typeof null returns "object" (this is a known JavaScript bug).
  - null == undefined  -> true
  - null === undefined -> false
*/

let user = null;
console.log("user:", user);           // null
console.log("typeof user:", typeof user); // "object" (JS bug)

/*
  ============================================
  undefined
  ============================================
  - undefined means "value is not assigned".
  - It is automatically given by JavaScript when:
      1. A variable is declared but not initialized.
      2. A function does not return anything.
      3. An object property does not exist.
  - typeof undefined returns "undefined".
*/

let name;
console.log("name:", name);             // undefined
console.log("typeof name:", typeof name); // "undefined"

function greet() {
  console.log("Hello!");
  // no return statement
}

let result = greet();
console.log("result:", result);         // undefined

let person = { age: 25 };
console.log("person.name:", person.name); // undefined (property does not exist)

/*
  ============================================
  Quick Difference
  ============================================
  | undefined                          | null                          |
  |------------------------------------|-------------------------------|
  | Not assigned any value yet           | Intentionally empty           |
  | Automatically set by JavaScript      | Manually set by programmer    |
  | typeof is "undefined"                | typeof is "object" (bug)      |
  | variable declared but not initialized| variable reset to empty value |

  ============================================
  Equality Check
  ============================================
*/

console.log("null == undefined:", null == undefined);   // true  (both are empty)
console.log("null === undefined:", null === undefined); // false (different types)
