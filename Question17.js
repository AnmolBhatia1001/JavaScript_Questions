/*
Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm

*/

let now = new Date();

let year = now.getFullYear();
let month = Number(now.getMonth()) + 1;
let date = now.getDate();
let hour = now.getHours();
let min = now.getMinutes();

console.log(
`YYYY-MM-DD HH:mm : ${year}-${month}-${date} ${hour}:${min}
DD-MM-YYYY HH:mm : ${date}-${month}-${year} ${hour}:${min}
DD/MM/YYYY HH:mm : ${date}/${month}/${year} ${hour}:${min}
`);
