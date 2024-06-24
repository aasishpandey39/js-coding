//Array Part(1)
// Array are resisable in js.
// JS array-copy operations create "shallow copies" 
/* (Shallow copy) of an object is a copy whose properties share
   the same reference.
   (Deep copy) of an object acopy whose properties do not
   share the same reference. */

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["spiderman", "batman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);
// Array methods.

myArr.push(6)
myArr.push(7)
myArr.pop() // pop remove the last value from the array
console.log(myArr);


myArr.unshift(9) // unshift add 9 at starting point of array
myArr.shift() // shift basically remmove the first value from the array
console.log(myArr);

console.log(myArr.includes(9)); // result datatype false (boolean)
console.log(myArr.indexOf(9)); // show (-1) it means value does not exist 
console.log(myArr.indexOf(3)); // show index 3rd

const newArr = myArr.join() // .join add all the element into the string

console.log(myArr);
console.log(typeof newArr); // join bind the array and conver into string

// Slice, Splice

console.log("A", myArr); // orignal array

const myn1 = myArr.slice(1,3) // slice basically returns a section of an array
console.log("B", myArr); // last range will not included
console.log(myn1);


const myn2 = myArr.splice(1,3) //(Splice) an array containing the deleted elements
console.log("c", myArr);
console.log(myn2);

