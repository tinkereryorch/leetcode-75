// LeetCode 345 - Reverse Vowels of a String

// Solution
const reverseVowels = (s) => {
    let low = 0;
    let high = s.length - 1;
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let stringArray = s.split('');

    while (low <= high) {
        if(vowels.includes(stringArray[low]) && vowels.includes(stringArray[high])) {
            swapVowels(stringArray, low, high);
            ++low;
            --high;
        }

        if (!vowels.includes(stringArray[low])) {
            ++low;
        }

        if (!vowels.includes(stringArray[high])) {
            --high;
        }
    }

    let resultString = stringArray.join('');

    return resultString;
}

let myString = "leetcode";
const result = reverseVowels(myString);
console.log(result);

function swapVowels(stringArray, low, high) {
    let temp = stringArray[low];
    stringArray[low] = stringArray[high];
    stringArray[high] = temp;
}
