/* the concept of scope determines the accessibility of variables, functions, and objects in various 
parts of the code. Understanding scope is crucial for managing variable visibility and avoiding potential bugs. */

// let a = 10 // Declares a block-scoped variable, optionally initializing it to a value.
// const b = 20 // Declares a block-scoped, read-only named constant.
// var c = 30 // Variables declared with var are function-scoped or globally-scoped.

// var c = 300
let a = 300 // vallue under global scope


if(true) {
    let a = 10 
    const b = 20 
   //  console.log("INNER:" , a); // value under block scopoe

}
// for (let index = 0; index < array.length; i++) {
//const element = array[index];
    
//}

// console.log(a);
// console.log(b);
// console.log(c);


// Nested scope
function one() {
    const username = "Ashish"

    function two () {
        const website = "youtube"
        console.log(username); //To acess the user name
    }
    // console.log(website);

    two()
}
// one()

if (true) {
    const username = "Ashish"
    if (username==="Ashish") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  This will not be executed
}
// console.log(username);  not execute

//+++++++++++++ Interresting ++++++++++++

// (1) way
console.log(addone(5)); // here acccess
function addone(num) {
    return num +1
}

// addone(5)



// (2) way
addtwo(5) // here not exess
const addtwo = function(num) {
    return num + 2
}

// addtwo(5)