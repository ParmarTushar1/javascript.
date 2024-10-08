// hoisting in javascript

// what is Hoisting 
// Hoisting in javaScript Default behvir of moving declaraions to tha top
//Declaraion can be both variable and function  
//hoisting is work with var only 


// Hoisting is not work with let const 

// let a ;
// console.log(a);          //output :- undefined 
// const  a=5;              // output:-  ReferenceError: Cannot access 'a' before initialization


// var   a=5;               
// console.log(a);              //output :- 5 


// console.log(a);              //undefined 
// var   a=5;  


// function Hoisting 



// add ()

//1
// function add (){
//     console.log("Hello,world");       // function is a function declaration, 
// }                                    // so it will be hoisted to the top of the scope.


//2
// var add = function (){                 //output:-TypeError: add is not a function
//     console.log("Hello,world"); 
// }


//3
// sayHello();
// function sayHello() {                      //output :- Hello, World!
//   console.log("Hello, World!");
// }



//arrow function 

//  add();
//  const  add = () =>{    //output :- ReferenceError: Cannot access 'add' before initialization  
// console.log("hello");

//  }

