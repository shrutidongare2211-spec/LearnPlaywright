const BASE_URL = "https://app.thetestingacademy.com";
//const BASE_URL = "https://app.thetestingacademy.com"; - redeclaration not possible
//BASE_URL = "https://staging.thetestingacademy.com";   - reassignment not possible
//TypeError: Assignment to constant variable.


let name = "pending";
//let name = "pending";  //we cannot have same pramod in one building
name = "done";
{
    let name = "Dongare";
}