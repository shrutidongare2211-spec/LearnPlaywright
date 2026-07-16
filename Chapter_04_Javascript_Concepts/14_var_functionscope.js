var a = 10; //Global Scope
console.log(a);


//Definition of the function
function printHello()
{
    console.log("Hello The Testing Academy!");
    var a = 20;  //Local scope
    console.log(a);
    if(true)
    {
        var a = 30;
        console.log(a);
    }
    console.log("F ->", a);   //Function-scoped it will pick latest value
}

printHello();