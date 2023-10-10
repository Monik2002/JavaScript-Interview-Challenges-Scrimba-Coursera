/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false
*/

let str1 = "angel";
let str2 = "glean";

function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    if (str1.length !== str2.length) {
        return false;
    }
    else if (sortedStr1 === sortedStr2) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isAnagram(str1, str2));