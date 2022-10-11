/*
Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.

*/

let pastDateData = new Date(0)
let now = new Date();

console.log(
`
What is the year today? : ${now.getFullYear()}
What is the month today as a number?: ${now.getMonth() + 1 }
What is the date today? : ${now.getDate()}
What is the day today as a number? : ${now.getDay() + 1 }
What is the hours now? : ${now.getHours()}
What is the minutes now? : ${now.getMinutes()}
`);


console.log(`from 1970 1st of january to now in Seconds :  ${(now - pastDateData) * 100}`);