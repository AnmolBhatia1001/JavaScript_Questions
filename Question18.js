/*
Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
*/


const readlineSync = require('readline-sync');

let userInput = readlineSync.question("Enter your age : ");

if(Number(userInput) >= 18 ){
    console.log(`You are old enough to drive`);
}else {
    console.log(`wait for ${18 - userInput} year to get licence`);
}