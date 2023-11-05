// LeetCode 151 - Reverse Words in a String

// Solution
const reverseWords = function(s) {
    let cleanArray = [];

    let trimmedString = s.trim();
    let splitString = trimmedString.split(' ');

    cleanArray = splitString.filter((word) => word.length > 0);
    cleanArray.reverse();

    return cleanArray;
}

let myString = 'a good  example';
let result = reverseWords(myString);
console.log(result);