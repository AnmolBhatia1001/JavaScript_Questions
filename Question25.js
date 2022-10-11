/*
In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'

*/

const shoppingCart = ["Milk", "Coffe", "Tea", "Honey"];

function addItem(item){
    if(shoppingCart.includes(item)){
        console.log(`${item} is already added`);
    }else if(item === "Meat"){
        shoppingCart.unshift(item)
    }else if(item === "Sugar"){
        shoppingCart.push(item)
    }
}

function removeItem(item){
    if(shoppingCart.includes(item)){
        shoppingCart.splice((shoppingCart.indexOf(item)),1)
    }else{
        console.log(`This item is not on the list`);
    }
}

function modifyItemsFn(item, modifedItem){
    if(shoppingCart.includes(item)){
        shoppingCart[shoppingCart.indexOf(item)] = modifedItem;
    }else{
        console.log(`This item is not on the list`);
    }
}


