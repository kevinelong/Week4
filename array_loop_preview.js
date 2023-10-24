
let fruit = ["apple", "orange", "pear"] //define an arry of fruit

let product = {name: "pencil", price: 12.34} //a single object with properties


//A LIST OF OBJECTS
let store = [
    {
        name: "pencil",
        price: 12.34
    },
    {
        name: "eraser",
        price: 23.45
    },
    {
        name: "notebook",
        price: 34.56
    },
    {
        name: "calculator",
        price: 99.99
    }
];

//NOTEBOOK PRICE
console.log(store[2].price)

// PRINT ENTIRE STORE
for(let index = 0; index < store.length; index++){
    console.log(store[index].name, store[index].price);
}

let cart = [] //EMPTY CART
//ADD 12 pencils
cart.push({qty:12, item: store[0] })
cart.push({qty:3, item: store[1] })
for(let index = 0; index < cart.length; index++){
    console.log(cart[index].qty, cart[index].item.name, cart[index].item.price);
}
