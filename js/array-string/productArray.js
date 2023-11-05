// LeetCode 238 - Product of Array Except Self

// Solution 1
const productExceptSelf = function(nums) {
    let prefix = [];
    let suffix = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            prefix[i] = 1;
        } else {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
    }

    console.log(`Prefix array: ${prefix}`);

    for (let j = nums.length - 1; j >= 0 ; j--) {
        if (j === nums.length - 1) {
            suffix[j] = 1;
        } else {
            suffix[j] = nums[j + 1] * suffix[j + 1];
        }
    }

    console.log(`Suffix array: ${suffix}`);

    for (let k = 0; k < nums.length; k++) {
        result[k] = suffix[k] * prefix[k]; 
    }

    return result;
}

let nums = [1, 2, 3, 4];
let result = productExceptSelf(nums);
console.log(nums);
console.log(result);