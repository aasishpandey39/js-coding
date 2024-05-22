
const accountId = 144553; // 'const' means the value cannot be changed
let accountEmail = "aasishpandeybgp@gmail.com"; // 'let' allows reassignment
var accountPassword = "12345"; // 'var' allows reassignment and is function-scoped

let accountCity = "Patna"; // Declared using 'let' to avoid global scope

// accountId = 2; // This line will throw an error because 'accountId' is a constant

accountEmail ="Ashish@.com"
accountPassword="901080"
accountCity="bengaluru"

console.log(accountCity); // This will output: Patna

/*
Prefer not to use Var
because of issue in block scope and funtional scope.
*/

console.table([accountId, accountCity, accountEmail, accountPassword])