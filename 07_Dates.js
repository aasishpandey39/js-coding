/*********Dates**********/

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2024, 0, 24 ) // Month starts from zero
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2024, 0, 24, 5, 3 )
// let myCreatedDate = new Date("2024-06-21" )
let myCreatedDate = new Date("06-21-2024" )
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // Print value in milliseconds
console.log(myCreatedDate.getTime()); // Print value in milliseconds
console.log(Math.floor(Date.now()/1000)); // Print value in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());


newDate.toLocaleString('default',{
    weekday: "long" 
    })