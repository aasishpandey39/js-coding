/* console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError: b is not defined
let b = 20;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;

console.log(myFunction); // [Function: myFunction]
function myFunction() {
    console.log("Hello, world!");
}  */

/* JS execution context

 In JavaScript, the execution context goes through two distinct phases: the Memory Creation Phase (also known as the Creation 
 Phase or Hoisting Phase) and the Execution Phase. Understanding these phases is crucial to grasping how JavaScript handles 
 variable and function declarations and executions.

----Memory Creation Phase-----

Creation of the Global Execution Context:

When the JavaScript engine starts executing a script, it first creates the global execution context.
During this phase, the engine allocates memory for variables and function declarations.
Hoisting:

Variable and function declarations are hoisted to the top of their respective scopes.
Variables declared with var are initialized with undefined, while let and const declarations are hoisted but not initialized.
Function declarations are hoisted with their entire definition.
Scope Chain Creation:

The scope chain is created, and the execution context's variable object is prepared.
'this' Binding:

The value of this is determined during the creation phase based on the context of the execution (global, function, etc.).  



// Execution phase

console.log(a); // undefined (from the creation phase)
a = 10; // variable 'a' is now assigned 10
console.log(a); // 10

myFunction(); // "Hello, world!" (function is hoisted and executed)

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20; // variable 'b' is now assigned 20

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30; // variable 'c' is now assigned 30

var a;
function myFunction() {
    console.log("Hello, world!");
}



--------Execution Phase--------

Code Execution:

After the memory creation phase, the JavaScript engine starts executing the code line by line.
It assigns values to variables and executes function calls.
Variable Assignment:

Variables declared with var, let, and const get assigned values during this phase.
If an attempt is made to use a variable declared with let or const before its initialization, it results in a ReferenceError.
Function Execution:

Functions are executed when they are called. If a function is called before its declaration, it will work if it's a function 
declaration due to hoisting, but not if it's a function expression.*/