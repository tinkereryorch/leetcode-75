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
console.log('Solution 1 result', result);

// Solution 2
const mergeAlternately2 = (word1, word2) => {
    let mergedString = '';
    let i = 0;
    let j = 0;

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            mergedString = mergedString.concat(word1[i]);
            i++;
        }

        if (j < word2.length) {
            mergedString = mergedString.concat(word2[j]);
            j++;
        }
    }

    return mergedString;
}

let result2 = mergeAlternately2("ab", "pqrs");
console.log('Solution 2 result', result2);