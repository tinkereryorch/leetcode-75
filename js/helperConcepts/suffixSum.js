// Where prefixSum calculates sums from left to right, suffixSum sums 
// from right to left

const suffixSum = (numbersList) => {
    let listLength = numbersList.length;
    let resultArray = new Array(listLength);
    resultArray[listLength - 1] = numbersList[listLength - 1];

    for (let i = listLength - 2; i >= 0; i--) {
        resultArray[i] = resultArray[i + 1] + numbersList[i];
    }

    return resultArray;
}

let testArray = [15, 10, 25, 5, 10, 20];
let result = suffixSum(testArray);
console.log(result);