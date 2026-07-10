// JavaScript Identifiers - Rules and Examples

// ✅ VALID IDENTIFIERS

// Can contain letters, digits, underscores, and dollar signs
let firstName = "Shruti";
let lastName1 = "Dongare";
let _privateVar = 100;
let $price = 50;
let user_name = "shruti_2211";
let score1 = 90;
let $$$ = "valid but not recommended";
let _ = "also valid";

// Case-sensitive
let name = "Shruti";
let Name = "Shru";
let NAME = "SD";

// Descriptive names
let totalMarks = 450;
let isStudent = true;
let calculateSum = function (a, b) {
    return a + b;
};

// Unicode allowed but not recommended
let नाम = "Test";
let 名前 = "Test";


// ❌ INVALID IDENTIFIERS

// Cannot start with a digit
// let 1stPlace = "First";     // Error
// let 2name = "Hello";        // Error

// Cannot contain spaces
// let first name = "Shruti";  // Error

// Cannot use special characters except _ and $
// let user@name = "shruti";   // Error
// let total#marks = 100;      // Error
// let my-name = "test";       // Error

// Cannot use reserved keywords
// let class = "Maths";        // Error
// let function = "test";      // Error
// let var = 10;               // Error
// let return = 5;             // Error
// let const = 3.14;           // Error


// 📝 SUMMARY OF RULES

// 1. Must start with a letter (a-z, A-Z), underscore (_), or dollar sign ($)
// 2. After first character, can include digits (0-9)
// 3. Cannot start with a digit
// 4. Cannot contain spaces or special characters (except _ and $)
// 5. Cannot use JavaScript reserved keywords
// 6. Identifiers are case-sensitive
// 7. Use meaningful and descriptive names
// 8. Unicode characters are allowed but not recommended


// 🖨️ OUTPUT EXAMPLES

console.log(firstName);
console.log(lastName1);
console.log(_privateVar);
console.log($price);
console.log(user_name);
console.log(score1);
console.log(name, Name, NAME);
console.log(totalMarks);
console.log(isStudent);
console.log(calculateSum(10, 20));
