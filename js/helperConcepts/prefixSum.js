// Prefix sum is also known as cumulative sum, inclusive scan or simply scan

const prefixSum = (numberList) => {
    const resultArray = [];
    resultArray[0] = numberList[0];

    for (let i = 1; i < numberList.length; i++) {
        resultArray[i] = resultArray[i - 1] + numberList[i];
    }

    return resultArray;
}

let testArray = [15, 10, 25, 5, 10, 20];
let result = prefixSum(testArray);
console.log(result);