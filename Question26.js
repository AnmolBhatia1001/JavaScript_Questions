/*
In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
*/

let countries = ["INDIA", "USA", "United Kingdom", "JAPAN", "CHINA"];

function checkAndAdd(country){
    if(countries.includes(country)){
        console.log(country);
    }else{
        countries.push(country)
        console.log(`${country} Added`);
    }
}

checkAndAdd("Ethiopia")