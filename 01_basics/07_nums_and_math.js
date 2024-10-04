const score =400
const balane = new Number (100)

console.log(balane);
console.log(score);
console.log(balane.toString().length);
console.log(balane.toFixed(2));

const othernumber =123.999
console.log(othernumber.toLocaleString());

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//================================Math===================================

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.min(4.9));

console.log(Math.random());

console.log(Math.random()*10);

console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);



const min = 10
const max = 20
 
console.log(Math.floor(Math.random()*(max-min+1)+min));