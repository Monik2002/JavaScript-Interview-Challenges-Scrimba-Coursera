/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

// Q1- if there is a single word then it will be printed as it is but with uppercase and an exclamation mark at the end but if there are more than one word or its a sentance then after every word then will be a specific emoji and the word or sentence will be printed in uppercase and at the end of the sentance there will be an exclamation mark. 

let str = "hello world";
function panic(str) {
    return str.split(" ").join(" 😱 ").toUpperCase() + "!"
}
console.log(panic(str));