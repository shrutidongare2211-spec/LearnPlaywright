//??

console.log(null >= 0);   //null == 0 or null > 0
console.log(null === 0); //false: data types are different

// ?? Nullish
//let amul = null;
//let milk_required = amul ?? "Gokul Milk";
//console.log(milk_required);             //Gokul Milk
//If something is not null don't assign a value
//If something is null assign a value

let amul = "Amul Milk present";
let milk_required = amul ?? "Gokul Milk";
console.log(milk_required);               //Amul Milk present

//?? - to check the null
