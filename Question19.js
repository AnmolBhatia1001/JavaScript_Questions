/*
Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
*/



const readlineSync = require('readline-sync');

let userInput = readlineSync.question("Enter the Number : ");

function isEvenFn(userInput){
    if (userInput % 2 === 0) {
        console.log(`${userInput} is Even Number`);
    } else {
        console.log(`${userInput} is Odd Number`);
    }
}

isEvenFn(userInput)