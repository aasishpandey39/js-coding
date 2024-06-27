// Object 

//  const tinderUser = new Object() // empty object. (Singleton object)
const tinderUser = {} // same value, empty object. (non-singleton object)


tinderUser.id = "123abc"
tinderUser.name = "Bravo"
tinderUser.isLoggedIn = false


console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Ashish",
            lastname: "Pandey"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname); // access the objects

const obj1 = {1:"a", 2:"b"} // keys no., values string
const obj2 = {3:"a", 4:"b"}

//  const obj3 = {obj1, obj2} // like array problem, object k ander object

// const obj3 = Object.assign({}, obj1, obj2) /* all values combines,use object.assign and ir returns target object
                                              /* {} target, obj1,obj2 Source */

const obj3 = {...obj1, ...obj2} //  mostly use Spread operator ( values combine)                                               
console.log(obj3);


// when value comes from database. Array k ander objects
const users = [
    {
        id : 1,
        email: "Ashish@gmail.com",
    },
    {
        id : 1,
        email: "Ashish@gmail.com",
    },
    {
        id : 1,
        email: "Ashish@gmail.com",
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // keys output value array datatype
console.log(Object.values(tinderUser)); // values output value array datatype
console.log(Object.entries(tinderUser)); // gives array inside array

// check the proprty is available or not.
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true (result in boolean)
console.log(tinderUser.hasOwnProperty('isLogged')); // false