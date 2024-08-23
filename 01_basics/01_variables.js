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

//how to run ls/node and tab 

// prefer not to use var 
// because of issue in block scope and functionl scope
 
// const 
// Variables declared with const are also block-scoped like let.
// Variables declared with const cannot be reassigned once they are initialized. However,
// if the value is an object or an array, the properties or elements of the object or array can 
// still be mutated.

// lat
// Variables declared with let are block-scoped, meaning their scope is limited to the 
// block in which they are defined (e.g., within a loop or conditional statement).
// Variables declared with let cannot be redeclared within the same block, but they can 
// be reassigned.

// summary 
// Use let for variables that need to be block-scoped and may require reassignment but not 
// redeclaration.
// Use const for variables that need to be block-scoped and should not be reassigned after 
// initialization, although their properties or elements can still be mutated.