const marvel_haro = ["thor","ironman","spiderman"]
const dc_haro = ["suparman","flash","batman"]

// marvel_haro.push(dc_haro)
// console.log(marvel_haro);      //output:-[ 'thor', 'ironman', 'spiderman', [ 'suparman', 'flash', 'batman' ] ]

// marvel_haro.concat(dc_haro)
// console.log(marvel_haro);   //output:- [ 'thor', 'ironman', 'spiderman' ] ><

// const allharos = marvel_haro.concat(dc_haro)
// console.log(allharos);          //output:-[ 'thor', 'ironman', 'spiderman', 'suparman', 'flash', 'batman' ]


// const all_new_haro = [...marvel_haro,...dc_haro]
// console.log(all_new_haro);        //output:-[ 'thor', 'ironman', 'spiderman', 'suparman', 'flash', 'batman' ]


// const another_arry = [1,2,3,4,5,[6,7,8,9],10,[11,12,13],14,15,16]
// const real_another_arry = another_arry.flat(Infinity)

// console.log(real_another_arry);      

//output:-
//[
//    1,  2,  3,  4,  5,  6,
//    7,  8,  9, 10, 11, 12,
//   13, 14, 15, 16
// ]


console.log(Array.isArray("Tushar"));  //output:-false
console.log(Array.from("Tushar"));     //output:-[ 'T', 'u', 's', 'h', 'a', 'r' ]
console.log(Array.from({name:"Tushar"})); //output:-[]  //intersting 

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400 

console.log(Array.of (score1,score2,score3,score4)); //output:-[ 100, 200, 300, 400 ]
