//<------ datatypesummary.js 

// stacke and hepa memory 

// A stacke memory is used (primitive) and heap memory is used (non-primitive)

// stack and heap are crucial to understanding how memory is managed.



//Stack in JavaScript
//The stack in JavaScript is used for storing primitive
//data types (like number, string, boolean, undefined, null, symbol, and bigint) 
//and references to objects. It's a place where function calls, execution contexts,
//and local variables are managed.


//The heap in JavaScript
//is used for storing objects and reference
//data types (like arrays, objects, functions).
//These are dynamic types whose size may not be known at the time of allocation,
//so they are stored in the heap to allow for more flexible memory management.

let myyoutubename ="tusharcodeing"

let nothername = myyoutubename

nothername = "let go codeing"
 
console.log(nothername);
console.log(myyoutubename);

let userone= {
     gmail:"tushar@gmail.com"
}

// let usertwo = {
//     gmail:"parmar@gmail.com"
// }

let usertwo = userone
usertwo.gmail = "tusharparmar:- gamil"

console.log(userone.gmail);
console.log(usertwo.gmail);