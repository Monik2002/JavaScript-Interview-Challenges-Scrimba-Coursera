/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat": "🐱",
    "dog": "🐕"
}

let word = ":angr:";
function emojifyWord(word) {
    if (!word.startsWith(":") && !word.endsWith(":")) {
        // console.log(word);
        return word;;
    }
    word = word.slice(1, -1);
    if (word in emojis) {
        return emojis[word];
    }
    else {
        // console.log(word);
        return word;
    }
}

// console.log(emojifyWord(word));

let sentance = "i :heart: you";

function emojifySentance(sentance) {
    let sentance1 = sentance.split(" ");
    sentance1 = sentance1.map(word => emojifyWord(word));
    return sentance1.join(" ");
}

console.log(emojifySentance(sentance));