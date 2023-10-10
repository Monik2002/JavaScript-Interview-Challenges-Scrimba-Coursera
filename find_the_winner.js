/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
    "🍕 pizza": 3,
    "🌮 tacos": 10,
    "🍔 burger": 11,
    "🥗 salads": 7,
    "🍝 pasta": 5
}

// 1ST WAY -->
// function findTheWinner(obj){
//     let maxVotes = 0;
//     let element = "";
//     for(let [food,votes] of Object.entries(obj)){
//         if(votes > maxVotes){
//             element = food;
//             maxVotes = votes;
//         }
//     }
//     return `The winner is ${element} with ${maxVotes} votes!`
// }

// console.log(findTheWinner(gameNightFood));

// 2ND WAY -->
function findTheWinner(obj) {
    // initialize some new variable to: 
    // keep track of the current highest vote number
    let highestVotes = 0;
    // keep track of the current winning item
    let winningItem = "";
    // for each food option in the food object
    for (let food in obj) {
        // is the current value higher than the value of highestVotes?
        if (obj[food] > highestVotes) {
            // yes: the new value of highestVotes in the current value and
            highestVotes = obj[food];
            // winningItem = the current property
            winningItem = food;
        }
    }

    // return string announcing the winner using winningItme and highestVote variables
    return `The winner is ${winningItem} with ${highestVotes} votes.`
}

console.log(findTheWinner(gameNightFood));


// The for...in and for...of loops are both used to iterate over objects in JavaScript. However, there are some key differences between the two loops.

// The for...in loop iterates over the enumerable properties of an object. This includes both the properties that are owned by the object itself and the properties that are inherited from its prototype chain.

// The for...of loop iterates over the iterable values of an object. This includes the values of the object's own properties, but it does not include the values of inherited properties.