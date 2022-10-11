/*
- Explain the difference between forEach, map, filter, and reduce.
- Define a callback function before you use it in forEach, map, filter or reduce.


- Use forEach to console.log each name in the names array.
- Use forEach to console.log each country in the countries array.
- Use forEach to console.log each number in the numbers array. 


- Use map to create a new array by changing each country to uppercase in the countries array.
- Use map to create an array of countries length from countries array.
- Use map to create a new array by changing each number to square in the numbers array
- Use map to change to each name to uppercase in the names array
- Use map to map the products array to its corresponding prices.

- Use filter to filter out countries containing land.
- Use filter to filter out countries having six character.
- Use filter to filter out countries containing six letters and more in the country array.
- Use filter to filter out country start with 'E';
- Use filter to filter out only prices with values.

- Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
- Use reduce to sum all the numbers in the numbers array.
- Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
- Explain the difference between some and every
- Use some to check if some names' length greater than seven in names array

- Use every to check if all the countries contain the word land
- Explain the difference between find and findIndex.
- Use find to find the first country containing only six letters in the countries array
- Use findIndex to find the position of the first country containing only six letters in the countries array
- Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
- Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
*/


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



// Q. Use forEach to console.log each name in the names array.
// names.forEach(element => console.log(element))

// Q. Use forEach to console.log each country in the countries array.
// countries.forEach(element => console.log(element))

// Q. Use forEach to console.log each number in the numbers array.
// numbers.forEach(element => console.log(element))

// Q. Use map to create a new array by changing each country to uppercase in the countries array.
// console.log(countries.map(element => element.toUpperCase()));

// Q. Use map to create an array of countries length from countries array.
// console.log(countries.map(element => element.length));

// Q. Use map to create a new array by changing each number to square in the numbers array
// console.log(numbers.map(element => element**2 ));

// Q. Use map to change to each name to uppercase in the names array
// console.log(names.map(n => n.toUpperCase()));

// Q. Use map to map the products array to its corresponding prices.
// console.log(products.map(e => `${e.product} : ${e.price}`));


// Q. Use filter to filter out countries containing land.
/*
const checker = function(str){
  let standardize = str.toLowerCase();
  if(standardize.includes("land")){
    return standardize
  }
}
console.log(countries.filter(checker));
*/


// Q. Use filter to filter out countries having six character.


/*
const filtered = function(str){
  if(str.length === 6 ){
    return str
  } 
}
console.log(countries.filter(filtered));
*/


// Q. Use filter to filter out countries containing six letters and more in the country array.
/*
const filtered = function(str){
  if(str.length >= 6){
    return str
  }
}
console.log(countries.filter(filtered));
*/

// Q. Use filter to filter out country start with 'E'
/*
const filtered = function(str){
  if(str[0] === "F"){
    return str
  }
}
console.log(countries.filter(filtered));
*/


const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// Q. Use filter to filter out only prices with values.
/*
const filtered = function(obj){
  if(obj["price"] != " " && obj["price"] != ""){
    return obj.price
  }
}

const filteredArry = products.filter(filtered);

let priceOnlyArry = [];

const priceOnly = function(){
  for(let i = 0; i<filteredArry.length ; i++){
    let obj = {
      price : filteredArry[i].price
    }
    priceOnlyArry.push(obj)
  }
}
priceOnly()
console.log(priceOnlyArry);
*/


// Q. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
/*
let someArray = [2, "Dev", true, 10, "Anmol"]

let filterMethod = function(ele){
  if(typeof ele == "string"){
    return ele
  }
}

function stringList(arr){
  return arr.filter(filterMethod)
}

console.log(stringList(someArray));
*/


// Q. Use reduce to sum all the numbers in the numbers array.
/*
let sum = numbers.reduce( (accumalator, currentValue) => accumalator += currentValue,0);
console.log(sum);
*/

// Q. Use reduce to concatenate all the countries and to produce thissentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
/*

console.log(countries.reduce((prev, curr) => {

if(prev=='Finland' && curr=='Sweden'){
  return `Estonia, ${prev}, ${curr}`;
}
else if(prev=='Estonia, Finland, Sweden, Denmark, Norway' && curr=='IceLand'){
  return `${prev}, and ${curr} are north European countries`;
}
else{
  return `${prev}, ${curr}`;
}
}));
*/


// Q. Explain the difference between some and every
/*
let someNumArr = [17, 12, 18, 20, 15]

function isGreaterThan18(value){
  return value >= 18
}

console.log(someNumArr.some(isGreaterThan18));
// some method chech if even one element ofthat itrateable arry is returning true or no

console.log(someNumArr.every(isGreaterThan18));
// whereas every method check if all element is return true or not

*/


// Q. Use some to check if some names' length greater than seven in names array
/*
let nameLengthChecker = function(element){
  return element.length > 7
}
console.log(names.some(nameLengthChecker));
*/


// Q. Use every to check if all the countries contain the word land
/*
const countriesChecker = function(country){
  return country.includes("land")
}
console.log(countries.every(countriesChecker));
*/


// Q. Explain the difference between find and findIndex.
/*
let someNumArr = [17, 12, 18, 20, 15];

let isGreaterThan18 = function(ele){
  return ele >= 18;
}

console.log(someNumArr.find(isGreaterThan18));
// find method returns the value of the first element in an array that pass the test

console.log(someNumArr.findIndex(isGreaterThan18));
// findIndex method reurns the index of the first element in an array that pass the test
*/


// Q. Use find to find the first country containing only six letters in the countries array
/*
let checkerFunction = function(ele){
  return ele.length === 6;
}

console.log(countries.find(checkerFunction));
*/


// Q. Use findIndex to find the position of the first country containing only six letters in the countries array
/*
let checkerFunction = function(ele){
  return ele.length === 6;
}

console.log(countries.findIndex(checkerFunction));
*/


// Q. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
/*
function finder(ele){
  return ele === "Norway";
}

console.log(countries.findIndex(finder));
*/

// Q. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
/*
function finder(ele){
  return ele === "Russia";
}

console.log(countries.findIndex(finder));
*/





