var a = 10;     //Global Scope

//var is function-scoped

console.log(a);  

function printHello()
{
 console.log("Hello The Testing Academy!");   
 var a = 20;    //Local Scope
 console.log(a);
 if(true)
 {
    var a = 30;
    console.log(a);
 }
}

printHello();

var a = 50;

//var == trump, flipper, dual faced, no trust worthy