// # Primitive data types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
//const bigNumber = 234785777n


// Reference type / Non primitive type
// Array, Objects, Functions

const heros = ["krish","RaOne","robot"]
let myObj={
   name: "Ashish",
   age: 22, 
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof scoreValue);


//****************************************************
 
// Stack memory used in primitive type.
// Heap memory used in Non-primitive type.

let myYoutubename = "Ashish" // variable declare(myYoutubename)

let anothername = myYoutubename
anothername = "gamer"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Ashish@google.com"

console.log(userOne.email);
console.log(userTwo.email);
