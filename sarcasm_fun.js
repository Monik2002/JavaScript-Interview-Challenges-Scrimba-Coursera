/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

let str = "hello worl!d";

function altCaps(str) {
    let str1 = str.split("");
    console.log(str1);
    let str2 = [];
    for (let i = 0; i < str1.length; i++) {
        if (i % 2 === 0) {
            str2.push(str1[i].toUpperCase());
        } else {
            str2.push(str1[i]);
        }
    }
    console.log(str2);

    return str2.join(" ");
}

console.log(altCaps(str));