// for of 

// ["", "", ""]  strings inside array 
// [{}, {}, {}]  objects inside array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps - the map object holds key-value pairs and remembers the orignal insertion order of the keys
// Map known for the unique values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key,':-', value);
}

const myobject = {
    'game': 'NFS',
    'game@': 'IGI'
}

// for (const[ key, value ]of myobject) {
//     console.log(key,':-', value);
// }

 