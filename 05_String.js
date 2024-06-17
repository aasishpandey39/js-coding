const name = "Ashish" // string declared
const repoCount = 20

//console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Ashish-as') // string declared

// Object access
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); // check kis index pe konsa character hai
console.log(gameName.indexOf('h')); // check character konse position pe hai

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8,5)
console.log(anotherString);

// Trim remove the starting or end spsce.
const newStringOne = " Ashish "
console.log(newStringOne);
console.log(newStringOne.trim());

// Replace
const url = "https://Ashish.com/Ashish%20pandey"
console.log(url.replace('%20','-'))

console.log(url.includes('Ashish')) // checking the character available or not