// ============================================================
// Lab Exercise 2: Maximum Number Between Three Numbers
// File: LabEx2_MaxNo_ThreeNos_TernaryOp.js
// ============================================================

// Using ternary operator to find maximum of three numbers

let a = 12;
let b = 45;
let c = 30;

// Step 1: find max between a and b
// Step 2: compare that max with c
let max = (a > b ? a : b) > c ? (a > b ? a : b) : c;

console.log(`First Number: ${a}`);
console.log(`Second Number: ${b}`);
console.log(`Third Number: ${c}`);
console.log(`Maximum Number: ${max}`);


// ============================================================
// Another way using intermediate variable
// ============================================================

let tempMax = a > b ? a : b;
let finalMax = tempMax > c ? tempMax : c;

console.log(`Maximum using intermediate variable: ${finalMax}`);


// ============================================================
// END
// ============================================================
