/*
- Create a closure which has one inner function
- Create a closure which has three inner functions
*/


// Q. Create a closure which has one inner function
/*
function outerFunction(value1){
    let valueOne = value1;
    function innerFunction(value2){
        let valueTwo = value2;
        console.log(valueOne + valueTwo); 
    }
    return innerFunction
}

outerFunction(10)(10)
*/

// Q. Create a closure which has three inner functions
/*
function outerMostFn(v1){
    let valueOne = v1;

    function midFn(v2){
        let valueTwo = v2;
        
        function innerMostFn(v3){
            let valueThree = v3;
            console.log( valueOne + valueTwo + valueThree);
        }

        return innerMostFn
    }

    return midFn;
}

outerMostFn(10)(10)(10)
*/