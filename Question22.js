/*
Write a program which tells the number of days in a month.
*/

let readlineSync = require('readline-sync');

let userInput = readlineSync.question("Enter the Month : ");

let dayInMonths = {
    January : 31,
    February : 28,
    March : 31,
    April : 30,
    May : 31,
    June : 30,
    July : 31,
    August : 31,
    September : 30,
    October : 31,
    November : 30,
    December : 31
}

function checkDaysInMonth(userInput){
    for(let day in dayInMonths){
        if(day === userInput){
            console.log(`${userInput} has ${dayInMonths[day]} days`);
        }
    }
}

checkDaysInMonth(userInput)

