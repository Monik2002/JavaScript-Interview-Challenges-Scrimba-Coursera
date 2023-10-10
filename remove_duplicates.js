/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/

// MY WAY --> 
// const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";

// function removeDuplicates(password) {
//     let actualPass = '';
//     let arrPass = password.split('');

//     for (let i = 0; i < arrPass.length; i++) {
//         for (let j = i + 1; j < arrPass.length; j++) {
//             if (arrPass[i] === arrPass[j]) {
//                 arrPass.splice(j, 1); 
//                 j--;
//             }
//         }
//         actualPass += arrPass[i];
//     }

//     return actualPass;
// }

// console.log(removeDuplicates(password)); // Output : 938dsabj2fcgq


// 2ND WAY -->
// function removeDuplicatesFromString(input) {
//     let result = '';
//     const charSet = new Set();

//     for (let i = 0; i < input.length; i++) {
//         const char = input[i];
//         if (!charSet.has(char)) {
//             charSet.add(char);
//             result += char;
//         }
//     }

//     return result;
// }

// const inputString = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";
// const resultString = removeDuplicatesFromString(inputString);
// console.log(resultString); // Output: "938dsabj2fkq"


// 3RD WAY -->
// function removeDuplicatesFromString(input) {
//     return input.split('').filter((char, index, array) => {
//         return array.indexOf(char) === index;
//     }).join('');
// }

// const inputString = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";
// const resultString = removeDuplicatesFromString(inputString);
// console.log(resultString); // Output: "938dsabj2fkq"


// 4TH WAY -->
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";

function removeDupeChars(chars) {
    // create a new, empty string called dupesRemoved
    let dupesRemoved = '';

    // loop through the string we want to remove dupes from 
    for (let i = 0; i < chars.length; i++) {
        // for every character in the string, check: is it in dupesRemoved?
        if (!dupesRemoved.includes(chars[i])) {
            // if no, add it
            dupesRemoved += chars[i];
        }
        // if yes, keep going through the loop (do nothing)
    }

    // dupesRemoved -- it has no duplicates!
    return dupesRemoved;
}

console.log(removeDupeChars(password)); // Output: "938dsabj2fkq"



// 5TH WAY --> (using regex) --> The regular expression actually removes the first occurrence of each character, not the last one.
// function removeDuplicatesFromString(input) {
//     return input.replace(/(.)(?=.*\1)/g, '');
// }

// const inputString = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";
// const resultString = removeDuplicatesFromString(inputString);
// console.log(resultString); // Output: "9bajds8cfgq23"
