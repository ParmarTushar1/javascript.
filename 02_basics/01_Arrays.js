const myArr = [0,1,2,3,4,5,6]
// const MyHeor = ["Boss","Don"]


// const   newArr = (1,2,3,4,5,6)
 


//Array methods
// myArr.push (6)
// myArr.push (7)
// myArr.push (8)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));

// const NewArr = myArr.join ()

// console.log(myArr);
// console.log(newArr);


//slice , splie 

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice   (1,3)
console.log("C",myArr);
console.log(myn2);



// slice and splice in javascript difference between


               //slice                         //splice
//Returns selected elements from             //Returns removed elements
//    the array                                from the array


//Does Not mutate original array            // mutatse original array 


// can't add new elements                   //can add new elements to array 
 


 
//slice()
//Array’s slice() is used to extract a shallow copy of 
//the elements from array into a new array. 


//splice()
//Array’s splice() method is used to remove few elements,
//replace or add new elements in the array.

