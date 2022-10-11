/*
Boolean value is either true or false.
    - Write three JavaScript statement which provide truthy value.
    - Write three JavaScript statement which provide falsy value.
*/

var trulyOne = "";
var trulyTwo = true;
var trulyThree = 1 ;

if(trulyOne){
    console.log("empty string truly value");
}
if(trulyTwo){
    console.log("true is truly value");
}
if(trulyThree){
    console.log("1 is truly value");
}


var falsyOne = undefined;
var falsyTwo = false ;
var falsyThree = null ;

if(falsyOne){
}else{
    console.log("undefined is falsy value");
}

if(falsyTwo){
}else{
    console.log("false string is falsy value");
}

if(falsyThree){
}else{
    console.log("null is falsy value");
}