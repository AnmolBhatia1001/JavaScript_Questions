/*
Use for loop to iterate from 0 to 100 and print only prime numbers
*/


function primeOnly(nthNumber){
    let num;
    for(let i=2; i<=nthNumber; i++){
        num = 1;

        for(let j=2; j<=i/2 ; j++){
            if(i%j ==0){
                num = 0;
            }
        }

        if (num == 1){
            console.log(i);
        }
    }
}
primeOnly(100)