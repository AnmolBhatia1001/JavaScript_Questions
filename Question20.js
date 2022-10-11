/*
Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F

*/

const readlineSync = require('readline-sync');

let scores = readlineSync.question("Enter your Score : ")



function checkGrades(scores){
    if(scores >= 80){
        console.log(`Your Grade is A`);
    } 
    else if(scores >= 70 && scores <= 79){
        console.log(`Your Grade is B`);
    }
    else if(scores >= 60 && scores <= 69){
        console.log(`Your Grade is C`);
    }
    else if(scores >= 50 && scores <= 59){
        console.log(`Your Grade is D`);
    }
    else if(scores >= 0 && scores <= 49){
        console.log(`Your Grade is E`);
    }else{
        console.log(`Please Input in Correct Formate`);
    }
}

checkGrades(scores)