/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/

const mediaData = [
    {
        id: 1,
        title: "Stranger Scrims",
        duration: 40,
        tags: ["supernatural", "horror", "drama"],
    },
    {
        id: 2,
        title: "The Scrim of the Dragon",
        duration: 60,
        tags: ["drama", "fantasy"],
    },
    {
        id: 3,
        title: "Scrim Hunters",
        duration: 22,
        tags: ["reality", "home improvement"],
    },
    {
        id: 4,
        title: "This Old Scrim",
        duration: 30,
        tags: ["reality", "home improvement"],
    },
    {
        id: 5,
        title: "What We Do in the Scrim",
        duration: 55,
        tags: ["drama", "comedy", "supernatural"],
    },
    {
        id: 6,
        title: "The Scrimdalorian",
        duration: 58,
        tags: ["fantasy", "sci-fi", "adventure"],
    },
]

// 1ST WAY -->
function getUniqueTags(data) {
    return data.reduce((acc, { tags }) => {
        const uniqueTags = tags.filter((tag) => !acc.includes(tag));
        acc.push(...uniqueTags);
        return acc;
    }, []);
}

// 2ND WAY --> (NOT A GOOD WAY SINCE IT CONTAINS A LOT OF NESTED LOOPS)
// function getUniqueTags(data) {
//     // use map to loop through the data and get a new array of tags
//     // flatten the tags array with .flat()
//     const tags = data.map(podcast => podcast.tags).flat();
//     // create a new array uniqueTags to hold the unique values
//     const uniqueTags = [];
//     // loop through the tags array

//     tags.forEach(tag => {
//         // is the element already in the uniqueTags arr? 
//         if (!uniqueTags.includes(tag)) {
//             uniqueTags.push(tag)
//         }
//     })
//     return uniqueTags;
// }

// 3RD WAY -->
// function getUniqueTags(data) {
//     const tags = data.map(podcast => podcast.tags).flat();
//     const uniqueTags = {};

//     // filter tags arr
//     return tags.filter(tag => {
//         // look up the tag in the uniqueTags obj
//         if (!uniqueTags[tag]) {
//             uniqueTags[tag] = true;
//             // if it's not the, we have a unique item 
//             // put the item in our object with a value of true
//             return true;
//         }
//         return false;
//     });
// }

console.log(getUniqueTags(mediaData));