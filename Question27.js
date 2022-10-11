/*
The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method

*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];


// sorting
const sorted = ages.sort((a,b) => a-b)
console.log(ages.sort((a,b) => a-b)); 

// min
const minAge = Math.min(...ages)
console.log(Math.min(...ages))

//max
const maxAge = Math.max(...ages)
console.log(Math.max(...ages))

// median
console.log(sorted[Math.floor((maxAge - minAge)/2)]);

// average age
let avg = 0;
ages.forEach(item => {
    avg =  avg + item
});
console.log(avg/ages.length);

//range
let range = maxAge - minAge;
console.log(range);

console.log(Math.abs(minAge-(avg/ages.length)).toFixed(2));
console.log(Math.abs(maxAge-(avg/ages.length)).toFixed(2));