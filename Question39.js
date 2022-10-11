
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]


/*
- create an empty set
- Create a set containing 0 to 10 using loop
- Remove an element from a set
- Clear a set
- Create a set of 5 string elements from array
- Create a map of countries and number of characters of a country

*/

// Q. create an empty set
/*
let mySet = new Set();
*/

// Q. Create a set containing 0 to 10 using loop
/*
for (let i = 0; i <= 10; i++) {
    mySet.add(i)
}
console.log(mySet);
*/


// Q. Remove an element from a set
/*
mySet.delete(0)
console.log(mySet);
*/


// Q . Clear a set
/*
mySet.clear()
console.log(mySet);
*/


// Q. Create a set of 5 string elements from array
/*
let someRandomArray = [10, "Dev", "Anmol", "Alex", 25 , 1999 , "Raipur", "Chai", "Coffee"]

function filteration(ele){
    if(typeof ele == "string" && mySet.size <5){
        return mySet.add(ele)
    }      
}
someRandomArray.forEach(filteration)
console.log(mySet);
*/


// Q. Create a map of countries and number of characters of a country
/*
const countries = ['Finland', 'Sweden', 'Norway']
let myMap = new Map();

function extractor(ele){
    return myMap.set( ele , ele.length)
}

countries.forEach(extractor)

console.log(myMap);
*/



