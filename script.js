//Lab06: 3 dynamic components

// let myName = "you"; 
// alert("oh hello " + myName + "!");


// let name = prompt("Your name:", "");
// document.write("Hello ", name + ".");


// console.log("Hello, " + name + ". I am still learning, so no judgement here.")

// let email = prompt("Please correct your e-mail address:", "awesome@you.co");
// document.write("Your e-mail address is ", email + ".");


// let coffeeChoice = prompt("Do you like coffee? Type yes or no");
// console.log(coffeeChoice);

// if(coffeeChoice == 'yes'){
//     document.write("We like coffee too! Welcome to your new favorite place!");
//     let emailList = prompt("Want to join our mailing list and get a free cup on us?");   
// } else if (coffeeChoice == 'no'){
//     document.write("We have great non-coffee drinks too!");
// } else {
//     document.write("I'm not sure what you picked...but you're still welcome here.");
// }


//Lab07: Refactoring code with functions


function greeting(){
    let userName = prompt("Welcome to 102 coffee! What is your name?");
    console.log(userName);
    // prompt("Hi " + userName + "! Do you love coffee?")
    document.write("Hello, " + userName + "! ");
    document.write("Welcome to your new favorite place.");
    // return userName;
}

function lovesCoffee(){
    let coffeeChoice = prompt("Hi " + userName + ". Do you love coffee? Type yes or no");
    console.log(coffeeChoice);
    
    if(coffeeChoice == 'yes'){
        document.write("You love coffee.");
        let howMany = prompt("How many cups do you drink a day?");
    } else if (coffeeChoice == 'no'){
        document.write("You don't love coffee but you'll love us.");
        // let bevChoice = prompt("What is your favorite beverage?")
    } else {
        document.write("We're not sure if you like coffee but we know you'll love us.")
    }
    }
    

greeting();

lovesCoffee();