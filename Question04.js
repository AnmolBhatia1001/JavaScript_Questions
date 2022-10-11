/*
Check if the string contains a word Script using includes() method
*/

let someWord = "JavaScript is most loved & hated language in the world."

function checkWord(word){
    if(someWord.includes(word)){
        console.log("true");
    }else{
        console.log("false");
    }
}

checkWord("Script")