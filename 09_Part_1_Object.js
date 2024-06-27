 //Objects.
 // singleton -> through constructor method object declare
// Object.create -> Constructor method

// ojectg liteerals -> this is thr way to declare the object, Object.create
const mySym = Symbol("key1")

const jsUser = {
    name:"Ashish",
    "full name": "Ashish pandey",// no chace to access through dot
   [ mySym]: "mykey1", // correct way to declare a symbol
   mySym:"mykey1", // this data type is not use as a symbol. (string type)
    age: 22,
    location: "Bhagalpur",
    email: "ashishs@gmail.com",
    isLoggedIn: false,
    lastLogindays: ["Mondey", "Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"]) // no chace to access through dot
console.log(jsUser[mySym])


jsUser.email = "Ashish@chatgpt.com" // chage the value
//Object.freeze(jsUser) // freeze the value, after freeze the value will not be propogate
jsUser.email = "Ashish@microsoft.com" // not will propogate
console.log(jsUser);

// treat function like variable
jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`); // reference the name of the object, (`Hello js user, ${this.name}`
}


console.log(jsUser.greeting); // undefined
console.log(jsUser.greeting()); // print hello js user
console.log(jsUser.greetingTwo());
