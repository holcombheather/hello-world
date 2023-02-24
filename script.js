//Lab06: 3 dynamic components

let myName = "you"; 
alert("oh hello " + myName + "!");


let name = prompt("Your name:", "");
document.write("Hello ", name + ".");


console.log("Hello, " + name + ". I am still learning, so no judgement here.")


let email = prompt("Please correct your e-mail address:", "awesome@you.co");
document.write("Your e-mail address is ", email + ".");


// 4 ways to declare a variable (create one)

// let <-- changeable variable 
// const <-- constant variable, can't be change
// var <-- bad practice in 102
// (none) <--bad practice in 102

// DATA TYPES
// string --> "text", "42", ""
// numbers --> 42, 123, 456, 
// boolean --> true/false 

//console.log("Hello world!");

//let myFavColor = "yellow";
//console.log(myFavColor);

// myFavColor = "purple";
//console.log(myFavColor);

//let userName= prompt("Enter your name");
//console.log(userName); 

//alert("Hello," + userName)

// WRITING TO THE HTML DOCUMENT

//document.write("Hello world");
//document.write("Welcome," + userName);

//let coffeeChoice = prompt("Do you like coffee? Type yes or no");
//console.log(coffeeChoice);

// structure of conditionals
// if(this is true){exectute code} 

// if(coffeeChoice == 'yes'){
//    document.write("I like coffee too."); 
// } else if (coffeeChoice == 'no')

// Anatomy of a function

// function declaration / function definition
// function functionName(parameters){code to execute goes here;}









// Refactoring code in functions

//  let myName = "Heather"; 
//  alert("Welcome to my website!" + myName);

function greeting(){
    let userName = prompt("Enter your user name");
}
