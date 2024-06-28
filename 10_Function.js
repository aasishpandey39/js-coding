function sayMyname(){
    console.log("Ashish");
}
sayMyname() // reference of function

/*  function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}  */
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 +number2
}
const result = addTwoNumbers(3, 5) // store in a variale

console.log("Result:", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("plaease enter  a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ashish"))
// console.log(loginUserMessage("")) // empty string
// console.log(loginUserMessage()) // undefined

function calculateCarprice(val1, val2,...num1){
    return num1
}
console.log(calculateCarprice(200, 400, 500, 2000)) // to print this multiple price we use rest or Dot operator (...num1), add in array


// object
const user = {
    username: "Ashish",
    price: 199
}
// how to pass the object in function
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)

handleobject({
    username: "sam",
    price: 399
})

// pass the Array
const myNewArray = [200, 400, 100, 600]

//define a function to accept the Array and return the second value
function returnSecondvalue(getArray){
    return getArray[1] // getArray argument will pass here
}

//  console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200, 400, 500, 1000]));