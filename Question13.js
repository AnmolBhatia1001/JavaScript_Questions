/*
Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
*/


const readlineSync = require('readline-sync');

let userInputBase = readlineSync.question("Enter Base : ");
let userInputHeight = readlineSync.question("Enter Height : ");

let areaCalculation = 0.5 * Number(userInputBase) * Number(userInputHeight);

console.log(areaCalculation);