function getUserStatus()
{
    //var status_code;       done by JS Engine(optimized the code)
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);
}

getUserStatus();

//Note: var is function-scoped, so status is hoisted to
//the top of getUserStatus(), NOT the global scope.

