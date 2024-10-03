const name = "tushar";
const repoCount = 50;

//  The backticks (`    `) 

console.log(`hii my name ${name} and my  roll no  ${repoCount} that my Rell no`);

const gameName = new String ('tusharparmar')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('h'));


const newstrings =  gameName .substring(0,4)
console.log(newstrings);

const anotherstrings =  gameName .substring(-2,4)
console.log(anotherstrings);

  const newstringsOne = "   tushar"
console.log(newstringsOne);
console.log(newstringsOne.trim());

const url = "http://tushar.com/parmar%50/com"

console.log(url.replace('%50','---'));
console.log(url.includes('sunday'));


console.log(gameName.split('-'));


