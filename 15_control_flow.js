// If
/* const isUserloggeddIn = true
const temperature = 41

if(temperature < 50) {
    console.log("less than 50 ");
}
else {
    console.log("temperature is greater than 50");
}
console.log("Execute"); */

// Comparision operator
// < , >, <= , >= , == , != , === , !==

// Var is complitely global (outside the scope), so we maily use Let and Const.
// const score = 200

// if (score > 100){
//    const power = "fly"
//   console.log(`user power:${power}`);
// }
// console.log(`user power:${power}`);


// short hand notation
// without scope
// const balance = 1000
// if (balance > 500) console.log("test1"),console.log("test2");

// talk about nesting

/* if (balance < 500) {
    console.log("less than 500");
}
else if ( balance < 750) {
    console.log("less than 750");
}
else if ( balance < 900) {
    console.log("less than 900");
}
else {
    console.log("less than 1200");
} */

const isUserloggeddIn = true
const devitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserloggeddIn && devitCard && 2==2){
    console.log("Allow to buy");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}




