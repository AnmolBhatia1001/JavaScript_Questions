/*
Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
*/

const readlineSync = require('readline-sync');

let userInputRadius = readlineSync.question("Enter Circle Radius : ");

function areaOfCircle(userInputRadius){
    let area = 3.14 * Number(userInputRadius) * Number(userInputRadius);
    return `Area of Circle is ${area}`
}

function circumOfCircle(userInputRadius){
    let circumference = Math.floor(2 * 3.14 * Number(userInputRadius));
    return `Circumference of Circle is ${circumference}`
}

console.log(areaOfCircle(userInputRadius));
console.log(circumOfCircle(userInputRadius));