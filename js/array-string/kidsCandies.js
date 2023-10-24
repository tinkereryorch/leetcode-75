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

let candies =  [2, 3, 5, 1, 3];
let extraCandies = 3;
let result = kidsWithCandies(candies, extraCandies);
console.log(result);