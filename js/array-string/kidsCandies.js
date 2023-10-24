// LeetCode 1431 - Kids With Greatest Number of Candies

// Solution
const kidsWithCandies = (candies, extraCandies) => {
    let maxNumber = 0;
    let resultingArray = [];
    for(let i = 0; i < candies.length; i++) {
        if (candies[i] > maxNumber) {
            maxNumber = candies[i];
        }
    }

    for(let j = 0; j < candies.length; j++) {
        let hasMaxCandy = (candies[j] + extraCandies) >= maxNumber ? true : false;
        resultingArray.push(hasMaxCandy);
    }

    return resultingArray;
}

// Solution 2
var kidsWithCandies2 = function(candies, extraCandies) {
    let results = [];
    let max = Math.max(...candies);

    for(let i = 0; i < candies.length; i++) {
        (candies[i] + extraCandies >= max) ? results.push(true) : results.push(false);
    }

    return results;
};

let candies =  [2, 3, 5, 1, 3];
let extraCandies = 3;
let result = kidsWithCandies(candies, extraCandies);
console.log(result);