// LeetCode 11 - Container With Most Water

var maxArea = function(height) {
    return height;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result = maxArea(height);
console.log(result);

// endpoints of index 0: (0, 0) to (0, 1)
// endpoints of index 1: (1, 0) to (1, 8)
// endpoints of index 2: (2, 0) to (2, 6)