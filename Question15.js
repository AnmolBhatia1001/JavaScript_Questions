/*
Calculate the slope, x-intercept and y-intercept of y = 2x -2

slope is equal to m
formula y=mx+c
x- intercept = -c/m & y-intercept = c
*/



let equation = "y=2x-2"

let sepratedString = equation.split("")

let m = Number(sepratedString[2]);
let c = Number(sepratedString[5]);

console.log(
`
Slope is ${m}
x-intercept : ${-c/m}
y-intercept : ${c}
`);
