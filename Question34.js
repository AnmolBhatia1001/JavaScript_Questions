/*
Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
*/

/*

ax + by + c = 0

ax + by = -c 

lets p = -c

ax + by = p

x = (p -by)/a

y = (p -ax)/b

*/


function linearEquation(a,b,c){
    let p = -c;

    for(let i=0; (a*i)<=p; i++){

        if( (p - a * i) % b == 0){
            console.log(`x : ${i} ; y : ${(p-a*i)/b}`);
        }

    }
}

linearEquation(1,2,-5)

