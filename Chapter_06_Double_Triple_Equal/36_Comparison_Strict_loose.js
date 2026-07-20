//number == string

console.log(42 == "42");  // == -> loose comparison  T
console.log(42 === "42"); // compare data type and converted value F
console.log(42 == "45"); //value is different - False 

console.log(5 === 5);   //T
console.log(5 === "5"); //F

console.log(5 == 5);    //T
console.log(5 == "5");  //T

console.log(0 == ""); 
//T Empty if u convert to value is 0 0==0 / ? "" = converted to 0 - checked by the loose
//console.log(0 === ""); //F 0===0

console.log(true == 1);
console.log(false == 0);
console.log(true == "1");
console.log(true == 2);

//console.log(5 != "5"); //false, 5 = int, "5" string, both of them are not equal?
console.log(5 !== "5"); //true
//console.log(5 !=== "5"); This doesn't exists


