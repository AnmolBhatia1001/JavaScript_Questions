/*
Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
*/

function slopeCalculation(x1,y1,x2,y2){
    console.log(
`Slope between point (${x1} ,${y1}) and point (${x2} ,${y2}) is : ${(y2-y1)/(x2-x1)}`);
}


let pointOne = [2,2];
let pointTwo = [6,10];

slopeCalculation(...pointOne , ...pointTwo)