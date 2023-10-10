/* Welcome Aboard Scrimba Airlines 

Our Scrimba Airlines in-flight entertainment package 
includes a variety of podcasts. We need to add a feature that suggests
podcasts to our patrons based on whether a flight is short or long. 

Your sort function should take two arguments: the podcast data and
flight length. If the flight is 60 minutes or less, sort the podcast list 
from shortest to longest. If it's anything else, sort from longest
to shortest. 

Your function shouldn't return anything. Instead log a numbered list 
of the title and duration of 
each podcast to the console, like this:

1. Crime Fan, 150 minutes
2. Mythical Creatures, 99 minutes
3. Crime Crime Crime, 70 minutes
4. Coding Corner, 55 minutes
5. Scrimba Podcast, 50 minutes
6. Something about Witches, 35 minutes

*/

const podcasts = [
    {
        id: 1,
        title: "Scrimba Podcast",
        duration: 50,
        tags: ["education", "jobs", "technology"],
        hosts: ["Alex Booker"],
        rating: 10,
        genre: "education",
        paid: false
    },
    {
        id: 2,
        title: "Crime Fan",
        duration: 150,
        tags: ["crime", "entertainment", "mature"],
        hosts: ["Bob Smith", "Camilla Lambert"],
        genre: "true crime",
        rating: 5,
        paid: true
    },
    {
        id: 3,
        title: "Mythical Creatures",
        duration: 99,
        tags: ["entertainment", "general", "unicorns"],
        hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"],
        genre: "fantasy",
        rating: 8,
        paid: true
    },
    {
        title: "Crime Crime Crime",
        duration: 70,
        tags: ["crime", "entertainment", "mature"],
        hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"],
        genre: "true crime",
        rating: 6,
        paid: true
    },
    {
        title: "Something about Witches",
        duration: 35,
        tags: ["fantasy", "entertainment"],
        hosts: ["Frewin Wyrm", "Evanora Highmore"],
        genre: "fantasy",
        rating: 8,
        paid: false
    },
    {
        title: "Coding Corner",
        duration: 55,
        tags: ["education", "jobs", "technology"],
        hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"],
        genre: "education",
        rating: 9,
        paid: false
    },
]

// 1ST WAY --> (NOT PROPER WAY)
// function sortByDuration(data, flightLength) {
//     if (flightLength <= 60) { // podcasList in ascending order.

//         //         the filter() method returns an array of all the elements that pass the test function. In your case, the test function is simply returning true for all the elements, so the filter() method is returning the entire podcast array.

//         // To fix this, you can use the map() method instead of the filter() method.The map() method returns a new array with the results of the callback function applied to each element of the original array.
//         return data.map(({ title, duration }) => {
//             return { title, duration }
//         }).sort((a, b) => {
//             return a.duration - b.duration
//         });
//     }
//     else {
//         return data.map(({ title, duration }) => {
//             return { title, duration }
//         }).sort((a, b) => {
//             return b.duration - a.duration
//         });
//     }
// }

// 2ND WAY --> 
function sortByDuration(data, flightLength) {
    // Check if flight is greater than 60 minutes
    if (flightLength > 60) {
        // if yes, sort decending order (longest to shortest)
        data.sort((a, b) => b.duration - a.duration);
    } else {
        data.sort((a, b) => a.duration - b.duration);
    }
    // loop through my sorted array
    // using forEach() instead of map() bcs we are not returning anything.
    data.forEach(({ title, duration }, index) => {
        // construct a string using the title and duration props 
        // use the index to number the list
        // console.log each item
        console.log(`${index + 1}. ${title}, ${duration} minutes`);
    });
}

console.log(sortByDuration(podcasts, 70));