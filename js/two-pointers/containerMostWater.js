// LeetCode 11 - Container With Most Water

var maxArea = function(height) {
    let maximumArea = 0;
    let leftIndex = 0;
    let rightIndex = height.length - 1;

    while (leftIndex < rightIndex) {
        const barHeight = Math.min(height[leftIndex], height[rightIndex]);
        const width = rightIndex - leftIndex;
        const area = barHeight * width;

        maximumArea = Math.max(maximumArea, area);

        height[leftIndex] < height[rightIndex] ? leftIndex++ : rightIndex--;
    }
    return maximumArea;
}

const initialArray = [1,8,6,2,5,4,8,3,7];
const result = maxArea(initialArray);
console.log(result);


// endpoints of index 0: (0, 0) to (0, 1)
// endpoints of index 1: (1, 0) to (1, 8)
// endpoints of index 2: (2, 0) to (2, 6)