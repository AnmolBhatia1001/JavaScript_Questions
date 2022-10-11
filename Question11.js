/*
Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    - 4 > 3 // t
    - 4 >= 3 // t
    - 4 < 3 // f
    - 4 <= 3 // f
    - 4 == 4 // t
    - 4 === 4  // t
    - 4 != 4 // f
    - 4 !== 4  // f
    - 4 != '4'  // f
    - 4 == '4' // t
    - 4 === '4'  // f
    - Find the length of python and jargon and make a falsy comparison statement.

*/

console.log(
`
${4 > 3}
${4 >= 3}
${4 < 3}
${4 <= 3}
${4 == 4}
${4 === 4}
${4 != 4}
${4 !== 4}
${4 != '4'}
${4 == '4'}
${4 === '4'}
`);

let wordOne = "Python";
let wordTwo = "Jargon";

console.log(
`is word one has equal length as word two : ${wordOne.length === wordTwo.length} `);