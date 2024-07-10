// The for...in loop in JavaScript is used to iterate over the enumerable properties of an object.
// This loop is useful for looping through the properties of an object or the elements of an array.
const myobject =  {
    js: 'javascropt',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by app'
}

for (const key in myobject) {
   // console.log(`${key} shortcut is for ${myobject[key]}`);
        
    }

    const programming = ["js", "rb", "python", "java", "cpp"]

    for (const key in programming) {
      //  console.log(programming[key]);
    }

    
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United state of America")
// map.set('FR', "France")

// for (const key in map) {
//   console.log(key);
// }
// map is not ittretable, so we can't write in for-in loop.

