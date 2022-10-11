/*
Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more

*/


function checkBMI(userWeight, userHeight){
    let bmiOfUser = (userWeight / (userHeight**2)).toFixed(1) ;
    
    if(bmiOfUser < 18.5){
        console.log(`User is Underweight`);
    }else if (bmiOfUser > 18.5 && bmiOfUser < 24.9){
        console.log(`User is Normal`);
    }else if(bmiOfUser > 25 && bmiOfUser < 29.9){
        console.log(`User is Overweight`);
    }else if(bmiOfUser >= 30){
        console.log(`User is Obese`);
    }
}

// weight in kg & height in mtr
checkBMI(70, 1.75)
