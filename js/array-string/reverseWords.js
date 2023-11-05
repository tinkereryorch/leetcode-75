// LeetCode 151 - Reverse Words in a String

// Solution
const reverseWords = function(s) {
    let trimmedString = s.trim();
    let splitString = trimmedString.split(' ');
    return splitString.reverse();
}

let myString = '  Hello World!  ';
let result = reverseWords(myString);
console.log(result);