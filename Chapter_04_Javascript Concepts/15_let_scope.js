let a = 10; //Global Scope
console.log(a);


//Definition of the function
function printHello()
{
    console.log("Hello The Testing Academy!");
    let a = 20;
    console.log(a);
    if(true)
    {
        let a = 30;
        console.log(a);
    }
    console.log("F ->", a);   //Function-scoped it will pick latest value
}

console.log("G->", a);
printHello();

//Let is block scoped