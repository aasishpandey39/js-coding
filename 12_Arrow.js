const user = {

username: "Ashish",
price: 999,

welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); // to refer current contest we use this keyword
    console.log(this); // gives current context
    }
    
}

 // user.welcomeMessage()
 // user.username = "Abd" // this will execute because we didnt hardcode the value
 // user.welcomeMessage() // gives default value
 // console.log(this); // value {} empty object



 /* function chai() {
    let username = "Ashish"
    console.log(this.username);
 }

 chai()  */


 /* const chai = function() {
    let username = "Ashish"
    console.log(this.username);
 }

 chai()  */


 
 const chai = () => {
    let username = "Ashish"
    console.log(this);
 }

 // chai()

 // basic syntax of arrow function
 // () => {}
/*  const addTwo = (num1, num2) => {
        return num1 + num2 
    } */


// use as implicit return
// in {} this we use return keyword, but in () this return keyword is not neccessary
    // const addTwo = (num1, num2) =>   num1 + num2

    // const addTwo = (num1, num2) =>  (num1 + num2)

   
    const addTwo = (num1, num2) =>  ({username: "Ashish"}) // for returning the object

        
    
    console.log(addTwo(3,4));


    const myArray =  [2, 5, 3, 7, 8]

    // myArray.forEach(function(){}) // we also use another syntax like: .forEach(() =>()) Arrow function