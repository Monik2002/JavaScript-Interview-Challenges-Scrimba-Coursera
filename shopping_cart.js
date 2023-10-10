
/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
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


function total(arr) {
    return arr.reduce((sum, { price }) => {
        sum += price;
        return sum;
    }, 0).toFixed(2);      // .toFixed(0); --> rounds off the number to the upper bound
}

// arr.reduce((acc, curr) => {

// }, 0)

console.log(total(shoppingCart));
 

// function total(arr) {
//     const total = arr.reduce((acc, curr) => {
//         return acc + curr.price;
//     }, 0);
    
//     return total.toFixed(2);
// }

// console.log(total(shoppingCart));

