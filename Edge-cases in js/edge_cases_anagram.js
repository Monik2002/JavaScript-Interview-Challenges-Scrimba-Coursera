function isAnagram(str1, str2) {
    //if(str1.length !== str2.length) return false;
    if (typeof str1 !== "string" || typeof str2 !== "string") return false

    const newStr1 = str1.toLowerCase().split('').sort().join('').trim();
    const newStr2 = str2.toLowerCase().split('').sort().join('').trim();

    return newStr1 === newStr2;
}

//console.log(isAnagram("chin", "inch"));
//console.log(isAnagram("   night    ", "thing"));
//console.log(isAnagram(34, "thing"));
//console.log(isAnagram("NigHt", "THING"));
// console.log(isAnagram());