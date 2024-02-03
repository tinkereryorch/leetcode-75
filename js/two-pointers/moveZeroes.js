// LeetCode 283 - Move Zeroes

// Solution
const moveZeroes = (nums) => {
    if (nums.length === 1) {
        return nums;
    }

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === 0 && nums[j] !== 0) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }

    return nums;
}

// Solution 2
const moveZeroes2 = (nums) => {
    nums.sort((a, b) => (a === 0) - (b === 0));
}

let result = moveZeroes([0, 0, 1, 3]);
console.log(result);

let nums = [0, 0, 1, 3];
moveZeroes2(nums);
console.log(nums);