var name = "Shruti";

var firstName = "Shruti";
var lastName = "Dongare";
//Camel Case (standard for JS variables and functions)

var first_name = "Amit"; 
//Snake Case (underscore seperated)

var FirstName = "Amit";
//Pascal Case (standard for JS classes and constructors)

var FIRST_NAME = "AMIT";
//Screaming Snake Case / Upper Snake Case

// var first-name = "Amit"; //Invalid in JS
//Kebab Case (not allowed as variable name)

var strFirstName = "Amit";
//Hungarian Notation (string prefix with type - older style)

console.log("Name:", name);                       // Output: Name: Shruti
console.log("Camel Case:", firstName, lastName);   // Output: Camel Case: Shruti Dongare
console.log("Snake Case:", first_name);             // Output: Snake Case: Amit
console.log("Pascal Case:", FirstName);             // Output: Pascal Case: Amit
console.log("Screaming Snake Case:", FIRST_NAME);   // Output: Screaming Snake Case: AMIT
console.log("Hungarian Notation:", strFirstName);   // Output: Hungarian Notation: Amit