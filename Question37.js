/*
1. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
2. Create a function called signIn which allows user to sign in to the application
3. The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product
4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

*/

const users = [
{
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt:'08/01/2020 9:00 AM',
    isLoggedIn: false
},
{
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt:'08/01/2020 9:30 AM',
    isLoggedIn: true
},
{
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt:'08/01/2020 9:45 AM',
    isLoggedIn: true
},
{
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt:'08/01/2020 9:50 AM',
    isLoggedIn: false
},
{
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt:'08/01/2020 10:00 AM',
    isLoggedIn: false
}
];

const products = [
{
_id: 'eedfcf',
name: 'mobile phone',
description: 'Huawei Honor',
price: 200,
ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
],
likes: []
},

{
_id: 'aegfal',
name: 'Laptop',
description: 'MacPro: System Darwin',
price: 2500,
ratings: [],
likes: ['fg12cy']
},

{
_id: 'hedfcg',
name: 'TV',
description: 'Smart TV:Procaster',
price: 400,
ratings: [{ userId: 'fg12cy', rate: 5 }],
likes: ['fg12cy']
}
]

let listOfUsers = [] ;
let listOfEmail = [] ;

function userUpdater(){
    users.forEach(item => {
        listOfUsers.push(item.username)
    })
    users.forEach(item => {
        listOfEmail.push(item.email)
    })
}
userUpdater()    


// signUp  Function 
function signUp(inputName , inputEmail, inputPassword){
    if(listOfUsers.includes(inputName)){
        console.log(`${inputName} UserName is Already Taken`)
    }else if(listOfEmail.includes(inputEmail)){
        console.log(`${inputEmail} is already registered with us , Try SignIn`);
    }else {
        let uniqueId = Math.random().toString(36).slice(7) ;
        let now = new Date();
        let newUser = {
            _id : uniqueId,
            username : inputName,
            email : inputEmail,
            password : inputPassword,
            createdAt : now.toLocaleString(),
            isLoggedIn : false
        }
        users.push(newUser);
        userUpdater();
        console.log(`Account Created Successfully`); 
    }

}

// signIn Function
function signIn(inputName, inputPassword){
    if(listOfUsers.includes(inputName)){
        users.forEach(item => {
            if(item.username === inputName){
                console.log(`User Found`);
            }
        } )

        let passwordValidator = false ;
        users.forEach(item => {
            if(item.password === inputPassword){
                passwordValidator = true ;
                item.isLoggedIn = true;
                console.log(`Logged In Successfully \nWelcome ${item.username}`);
            }
        } )

        if(passwordValidator === false){
            console.log(`Wrong Password`);
        }

    }else{
        console.log(`User Not Found`);
    }
}

// rates the Product Function
function rateProduct(userInputId ,userInputProductID, userInputRating){
    let ratingObj = {
        userId : userInputId,
        rate : userInputRating
    }
    products.forEach(pro =>{
        if(pro._id === userInputProductID){
            pro.ratings.push(ratingObj) ;
            console.log(`Rating Updated`);
            console.log(pro.ratings);
        }
    })

}


// average rating of product Function
function averageRating(productID){
    let rating = []

    products.forEach(pro => {
        if(pro._id === productID){
            pro.ratings.forEach(rat =>{
                rating.push(rat.rate); 
            })
        }
    })

    let sum = 0;
    rating.forEach(r => sum += r)

    let avgRate = sum / rating.length

    console.log(avgRate);
}

// like Product Function
function likeProduct(inputUserName , productID){
    products.forEach(pro => {
        if(pro._id === productID){
            if(pro.likes.includes(inputUserName)){
                pro.likes.splice((pro.likes.indexOf(inputUserName)),1)
                console.log(`Like Removed`);
            }else{
                pro.likes.push(inputUserName);
                console.log(`Like Added`);
            }
            
        }
    })
}


// signUp("Dev", "dev@dev.com", "Dev123");


// signIn("Dev", "Dev123");
// console.log(users[5]);

// 

// signUp("anmol", "anmol@anmol.com", "anmol123")

// console.log(listOfUsers);
// console.log(listOfEmail);

// let now = new Date();
// console.log(now.toLocaleString());

// signUp()

// userName , userEmail, userPassword