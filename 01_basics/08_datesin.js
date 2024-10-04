// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970

let MyDate = new Date ()

console.log(typeof MyDate);           // date is a object                 

// We can use various methods to convert this date into more readable value.
console.log(MyDate.toString());
console.log(MyDate.toDateString());
console.log(MyDate.toISOString());
console.log(MyDate.toJSON());
console.log(MyDate.toLocaleDateString());
console.log(MyDate.toLocaleString());
console.log(MyDate.toLocaleTimeString());
console.log(MyDate.toTimeString());
console.log(MyDate.toUTCString());


// let MyCreateDate = new Date (2023,0,12)           //Thu Jan 12 2023
// let MyCreateDate = new Date (2024,0,12,5,0)
// let MyCreateDate = new Date ("2023-05-21")    //5/21/2023, 12:00:00 AM
let MyCreateDate = new Date ("01-05-2024")       //1/5/2024, 12:00:00 AM
console.log(MyCreateDate.toDateString());   //Fri Jan 12 2024
// console.log(MyCreateDate.toLocaleString());  //1/12/2024, 5:00:00 AM

let MyTimeStamp = Date.now()

console.log(MyTimeStamp);
console.log(MyCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date ()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getSeconds());
console.log(newDate.getTimezoneOffset());


// newDate .toLocaleDateString("default"{
//     weekday:"long",
    
// })