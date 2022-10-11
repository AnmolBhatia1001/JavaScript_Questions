/*
Write a script which generates a random hexadecimal number.
*/


function generatesHexaNum(range){
    console.log(Math.round(Math.random()*range).toString(16));
}

generatesHexaNum(9999999999)
