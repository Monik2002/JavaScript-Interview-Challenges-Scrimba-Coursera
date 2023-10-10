/* 🌴 Save the Weekend 🌴

Your best friend is a copywriter who writes product descriptions 
for a living. You want to use your hacking skills to help them 
automate their job so you both can spend the weekend on a 
tropical island. 

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description. 

Each description should look like this: 
[
    {
        id: 1,
        title: "Scrimba Podcast", 
        ...
        description: "Scrimba Podcast is a 50 minute education podcast hosted 
        by Alex Booker."
    }
    ...
]

If the podcast has more than one host, you can display only the first host.

Stretch goal: Display all three hosts in the description, seperated with commas: 

Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."
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
        id: 4,
        title: "Crime Crime Crime",
        duration: 70,
        tags: ["crime", "entertainment", "mature"],
        hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"],
        genre: "true crime",
        rating: 6,
        paid: true
    },
    {
        id: 5,
        title: "Something about Witches",
        duration: 35,
        tags: ["fantasy", "entertainment"],
        hosts: ["Frewin Wyrm", "Evanora Highmore"],
        genre: "fantasy",
        rating: 8,
        paid: false
    },
    {
        id: 6,
        title: "Coding Corner",
        duration: 55,
        tags: ["education", "jobs", "technology"],
        hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"],
        genre: "education",
        rating: 9,
        paid: false
    },
]

function createDescriptionsFor(data) {
    return data.map((podcast) => {
        const { title, duration, genre, hosts, rating } = podcast;
        // podcast["description"] = `${title} is a ${duration} minute ${genre} podcast hosted by ${hosts.join(', ')}.`;
        // return podcast; --> works but is an older method

        // Format hosts' names with commas and "and" for the last host
        let hostsString = "";
        if (hosts.length === 1) {
            hostsString = hosts[0];
        } else if (hosts.length === 2) {
            hostsString = hosts.join(' and ');
        } else {
            const lastHost = hosts.pop(); // This line of code removes and returns the last host in the array . pop removes the last elemnt from the array
            hostsString = hosts.join(', ') + ' and ' + lastHost;
            hosts.push(lastHost); // Restore the last host to the original array
        }

        return {
            ...podcast, description: `${title} is a ${duration} minutes ${genre} podcast hosted by ${hostsString} with a rating of ${rating} out of 10.`
        }
    });
}


// 2ND WAY -->
// function createDescriptionsFor(data) {
//     const newPodcasts = [];

//     for (const podcast of data) {
//         const newPodcast = {
//             ...podcast,
//             description: `${podcast.title} is a ${podcast.duration} minutes ${podcast.genre} podcast hosted by ${podcast.hosts.join(', ')} with a rating of ${podcast.rating} out of 10.`
//         };

//         newPodcasts.push(newPodcast);
//     }

//     return newPodcasts;
// }

// 3RD WAY -->
// function createDescriptionsFor(data) {
//     data.forEach((podcast) => {
//         podcast.description = `${podcast.title} is a ${podcast.duration} minutes ${podcast.genre} podcast hosted by ${podcast.hosts.join(', ')} with a rating of ${podcast.rating} out of 10.`;
//     });

//     return data;
// }

console.log(createDescriptionsFor(podcasts))

// description: "Scrimba Podcast is a 50 minute education podcast hosted by Alex Booker."

// ${ title } is a ${ duration } minute ${ genre } podcast hosted by ${ hosts },${ hosts },${ hosts } with a rating of ${rating} out of 10  