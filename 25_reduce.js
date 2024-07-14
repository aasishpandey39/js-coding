// reduce()
// The reduce method in JavaScript is used 
// to execute a reducer function on each element of the array, resulting in a single output value. 

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator} and currentvalue: ${currentValue}`);
//     return accumulator + currentValue
// }, 0)

const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0 )


console.log(myTotal);