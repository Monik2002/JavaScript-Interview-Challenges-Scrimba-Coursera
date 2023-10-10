/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

let str = "hello world!";

function whisper(str) {
    let str1 = str.slice(0, str.length).toLowerCase();
    if (str1.endsWith("!")) {
        return "shh..." + str1.slice(0, str1.length - 1);
    }
    return "shh..." + str1;
}

console.log(whisper(str));