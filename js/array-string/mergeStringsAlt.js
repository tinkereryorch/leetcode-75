//  LeetCode 1768 - Merge Strings Alternately


// Solution 1
const mergeAlternately = (word1, word2) => {
    let mergedString = '';
    let maxLength = word1.length > word2.length ? word1.length : word2.length;
    for (let i = 0; i < maxLength; i++) {
        mergedString += (word1[i] || "") + (word2[i] || "");
    }

    return mergedString;
}

let result = mergeAlternately("ab", "pqrs");
console.log(result);