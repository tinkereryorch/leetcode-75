// LeetCode 334 - Increasing Triplet Subsequence

// Solution
const increasingTriplet = (nums) => {
    let min = Math.max(...nums);
    let mid = min;

    for (num of nums) {
        if (num <= min) {
            min = num;
        } else if (num <= mid)  {
            mid = num;
        } else {
            return true;
        }
    }
    
    return false;
}

let result = increasingTriplet([1, 2, 3, 4, 5]);
console.log(result);