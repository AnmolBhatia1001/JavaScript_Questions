/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer

*/ 

let readlineSync = require('readline-sync');

let userInput = readlineSync.question("Enter the Month : ");

let autumn = ["autumn" ,"september", "october", "november"];
let winter = ["winter", "december", "january", "february"];
let spring = ["spring", "march", "april", "may"];
let summer = ["summer","june", "july", "august"];


let seasons = ["autumn","winter" , "spring", "summer"];

function checkSeason(userInput){
    for(let i = 0; i<seasons.length; i++){
        let currentSeason = eval(seasons[i]);
        if(currentSeason.includes(userInput)){
            console.log(currentSeason[0]);
        }
    }
}

checkSeason(userInput);