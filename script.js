// //Lab06: 3 dynamic components

// let myName = "you"; 
// alert("oh hello " + myName + "!");


// let name = prompt("Your name:", "");
// document.write("Hello ", myName + ".");


// console.log("Hello, " + myName + ". I am still learning, so no judgement here.")

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





// Lab07: Refactoring code with functions


function greeting(){
    let userName = prompt("Welcome to 102 coffee! What is your name?");
    console.log(userName);
    document.write("Hello, " + userName + "! ");
   

    let coffeeChoice = prompt("Hi " + userName + "! Do you love coffee? Type yes or no");
    console.log(coffeeChoice);
    if(coffeeChoice == 'yes'){
        document.write("You love coffee.");
        let howMany = prompt("How many cups do you drink a day?");
        console.log(howMany); 
            if(howMany > '1'){
               let promoCode = prompt("We agree. One is never enough. Enter in your email and we’ll send you a promo code for " + howMany + " free coffees on us!");
                console.log(promoCode)
                document.write(" We sent you " + howMany + " free coffees to your inbox at " + promoCode);
            if(howMany <= '1'){
                prompt("With just one you've got to make it count. Opt-in to our marketing emails and we'll send you a promo code for a free coffee on us.")
            }
            }
    } else if (coffeeChoice == 'no'){
        document.write("You don't love coffee but you'll love us. Opt-in to our emails and get a free beverage of your choice on us!");
    } else {
        document.write("We're not sure if you like coffee but we know you'll like us!")

        function getUserInput() {
            let maxAttempts = 3; // Maximum number of attempts
            let attempts = 1; // Counter for the number of attempts
          
            function isValidInput(input) {
              // Check if the input is either 'yes' or 'no'
              return input.toLowerCase() === 'yes' || input.toLowerCase() === 'no';
            }
            let userInput = prompt("Please enter 'yes' or 'no': ");
            while (!isValidInput(userInput)) {
              if (attempts >= maxAttempts) {
                alert(`You have exceeded the maximum number of attempts (${maxAttempts}).`);
                return null;
              }
              alert("Invalid input. Please try again.");
              userInput = prompt(`Please enter 'yes' or 'no' (attempt ${attempts}): `);
              attempts++;
            }
            return userInput.toLowerCase();
          }
          // Call the getUserInput function to get user input
          let userInput = getUserInput(); 
          // Do something with the valid user input
          if (userInput !== null) {
            alert(`You entered: ${userInput}`);
          }
        }
    } 
    

    greeting();


function coffeeCups(){
    let coffeePic = parseInt(prompt("How many cups of coffee have you had today? Pick a number between 0 and 10"));
    console.log ("user had " + coffeePic + "cups of coffee");
    if (coffeePic <= 10){
        alert("Nice!");
        console.log("user had" + coffeePic + "cups of coffee");
    for (let i = 0; i < coffeePic; i++){
            document.write('<img src="images/coffee_logo_background.png" height="20px" width="20px">');
        }
        
        return coffeeCups;
    } else if (coffeePic > 10){
        alert("Whoa! That's a lot! For the sake of this conversation, let's just pick a number between 0 and 10.");
        console.log("user had" + coffeePic + "cups of coffee");
        coffeeCups()
    }
}

coffeeCups();




