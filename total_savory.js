
/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

const shoppingCart = [
    {
        item: "🍭",
        price: 2.99,
        type: "sweet",
        onSale: true
    },
    {
        item: "🍫",
        price: 1.99,
        type: "sweet",
        onSale: true
    },
    {
        item: "🥫",
        price: 1.99,
        type: "savory",
        onSale: false
    },
    {
        item: "🍬",
        price: .89,
        type: "sweet",
        onSale: false
    },
    {
        item: "🥦",
        price: 3.99,
        type: "savory",
        onSale: false
    },
    {
        item: "🍖",
        price: 3.99,
        type: "savory",
        onSale: true
    },
]


function totalSavory(arr) {
    return arr.reduce((sum, { type, price }) => {
        if (type === "savory") {
            sum += price;
        }
        // else {
        //     sum += 0;
        // }
        return sum;
    }, 0)
}

// const next = totalSavory(shoppingCart);
// console.log(next);
console.log(totalSavory(shoppingCart));