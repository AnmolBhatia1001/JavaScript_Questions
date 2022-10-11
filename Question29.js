/*
Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
*/


function sumOfEvenOddNum(nthNumber){
    let sumOfEven = 0;
    let sumOfOdd = 0;

    for(let i=0; i<=nthNumber; i++){
        if(i % 2 == 0){
            sumOfEven = sumOfEven + i;
        }else{
            sumOfOdd = sumOfOdd + i;
        }
    }

    console.log(sumOfEven);
    console.log(sumOfOdd);
}

sumOfEvenOddNum(5)