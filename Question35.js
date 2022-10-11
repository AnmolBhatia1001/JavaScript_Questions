/*
Write a functions which checks if all items are unique in the array.
*/

const someArray = ["laptop", "pc", "mobile", "batman", "flash", 10, "mouse", 101, "camera", "laptop", "camera"];

let uniqueList = [];
let notUniqueList = [];

someArray.forEach((item)=>{
    if(uniqueList.includes(item)){
        notUniqueList.push(item)
    }else{
        uniqueList.push(item)
    }
})

console.log(`Unique Item List : ${uniqueList}`);
console.log(`Repeating Item List : ${notUniqueList}`);
