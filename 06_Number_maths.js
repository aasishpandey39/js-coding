const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//*********************Maaths******************************

console.log(Math); // object itself
console.log(Math.abs(-4)); // Absolute value , change -ve into positive
console.log(Math.round(4.6)); // round of the number 4.6 =>> 5
console.log(Math.ceil(4.2)); // ceiling select top value.
console.log(Math.floor(4.2)); // floor select down value.
console.log(Math.min(2, 3, 4, 5,)); // Find minimum value.
console.log(Math.max(2, 3, 4, 5,)); // Find maximumm value.

console.log(Math.random());
console.log((Math.random()*5) + 1);
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
