// Immediately Invoked Function  Expression (IIFE)

/* (IIFE) is a function in JavaScript that runs as soon as it is defined.
 It is a common JavaScript design pattern used to execute code immediately and to create a new scope for variables to avoid polluting the global scope.
  IIFE is basically used to avoid the global scope pollution */

 (function chai () {
    // named IIFE
    console.log(` DB CONNECTED`);
 })();
  
 // first perenthesis () is for funtion defination
 // second () perenthesis is a execution call


(  (name) => {
    // simple IIFE 
    console.log(` DB CONNECTED TWO ${name}`);;
} )('Ashish')

