// while
// The while loop checks the condition before the block of code is executed.

let index = 0
while (index <= 10) {
    // console.log(`value of index is ${index}`);
    index = index + 2
}

let myArray = [`flas`, `spiderman`, `superman`]

let arr = 0
while (arr < myArray.length) {
    // console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
    
}

// Do While
//  it checks the condition after executing the block of code

let score = 11
do {
    console.log(`score is ${score}`);
    score ++ // score will change continuesly
} while (score <= 10);