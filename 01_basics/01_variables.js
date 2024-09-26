const accuntId = 12345
let accuntEmail = "parmartushar12345@gmail.com"
var accuntpassword = "12345"
accuntcity = "pune"
let accuntstate;

//accuntId = 2 //not allowed 


accuntEmail = "Arjun12345@gmail.com"
accuntpassword = "54321"
accuntcity = "mumbai"

console.log(accuntId);
console.table([accuntId,accuntEmail,accuntpassword,accuntcity,accuntstate])

//how to run :- ls/node and tab 

//in javaScript  Var,let and const are used for varible declaration ,
//but thay have different behaviors and use cases:

//const
// . block-scoped 
// . hoisted but not initialized 
// . connot be reassigned after its initial value (immutable)

//let
// . blcke-scoped (works within a block {})
// . hoisted but not initialized ; accessing before declaration give ReferenceError.
// . cannot be redeclared in the same scope.

//var
// . function-scoped (works within the function).
// . hoisted and initialized with Undefined.
// . can be redeclared in the same scope. 
                   
// prefer not to use var 
// because of issue in block scope and functionl scope
 
//summary 
 // vae :- old way , function-scoped.
 // let :- new way , block-scoped, can be changed.
 // const :- new way , block-scoped, connot be changed.







