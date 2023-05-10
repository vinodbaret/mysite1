// Loops: To execute repetitive instructions. 
// Functions

// 1. Write a logic to perform the sum of n numbers entered by the user, stop if the user enters a negative number.


// let sum = 0;
// let input;
// do {
// input = prompt("Enter the number: ");
// const number = parseInt(input);
// if (number >= 0) {
// sum = sum + number;
// } while (input>=0);
// console.log("The sum of the entered numbers is: ", sum)


// 2. Write a logic to create a game called Guess the Number. 
// Computers generate a Random Number.
// User will try to guess a number, if Guess is Correct, Print Msg "User Won" 
// User has three change to guess the number, if Fails, Print Msg "User Lose" 


// var userNumber;
// var chance = 0;
// var maxchances = 3; var randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log(randomNumber)
// while(chance < maxchances)
// {
//   userNumber = parseInt(prompt ("Guess the number between 1 to 10:"));
//   if (userNumber === randomNumber){
//      document.write("User Won");
//      break;
// }
//  else
//  chance++
 
//   if(chance === maxchances) {
//      document.write("User] Lose");
// }
// }

// Write code to create an Object containing information 
// (Name, Age, Address(City, State, Pincode), Hobbies) 
// and also having function to display all information.


// var data = {
//     "name":"vinod",
//     "age":25,
//     "address":{
//         "city":"mandsaur",
//         "state":"mp",
//         "pincode":458001,
//         "hobbies":{"singing":"danccing","cricket":"tarrvel"}
//     }

// }
// console.log(data)