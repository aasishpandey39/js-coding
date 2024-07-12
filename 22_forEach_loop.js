// The forEach loop in JavaScript is used to execute a provided function once for each array element. 
// It's a method available on arrays and is typically used for array iteration.

/*
 array.forEach(function(currentValue, index, array) {
    // code to be executed for each element
}, thisValue);
 */

const coding = [ "js", "rb", "java", "cpp", "python"]

// ForEach (callback function), call back function don't include name
// coding.forEach( function  (item) {
//   console.log(item);
// }  ) 


// Arrow function

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


const myCoding = [
    // objects is declare inside array
    {languageName: "javascript",
    languageFileName: "js"},

    {languageName: "java",
    languageFileName: "java"},

    {languageName: "python",
    languageFileName: "py"},    

]

myCoding.forEach((item) => {
    
    console.log(item.languageName); // it gives the value of object of array
})