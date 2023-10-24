
// STORE

// WHAT DO ALL STORES DO?

// advertise - list of products
// buy product - products have use, description, price, name
// checkout - preview our cart, quantity

let catalog = {
    1001 :    {
        id: 1001,
        name:"pencil",
        price: 12.34,
        quantity: 0
    }
};

let cart = [];

function showCatalogItems(){
    for (const [key, item] of Object.entries(catalog)) {
        console.log(item.id, item.name, item.price)
    }
}

function addItemToCart(id, qty){
    let item = catalog[id];
    item.quantity = qty
    cart.push(item);
}

function showCartContents(){
    //Include total and subtotals
    cart.forEach(item => console.log(
        item.id, item.name, item.price, item.quantity, item.price * item.quantity 
    ));
}
//TEST THE IDEA - NARRATIVE STORY
showCatalogItems();
addItemToCart(1001, 12);
showCartContents();
