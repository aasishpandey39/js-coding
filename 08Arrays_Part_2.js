// Array Part (2)
const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // aaray inside array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
//.concat combines two or more arrays. This mathod returns a new arra without modifying any existing array.
//console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread method to combines two or more array.
console.log(all_new_heros);


const another_array = [1, 2, 3,  [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_nother_array = another_array.flat(Infinity)
// .flat Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_nother_array);



console.log(Array.isArray("Ashish")) // returns false because this is nnot an array
console.log(Array.from("Ashish")) // .from conver into an array.
console.log(Array.from({name:"Ashish"})) // gives empty array[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.