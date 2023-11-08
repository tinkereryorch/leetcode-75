const prefixSum = (numberList) => {

    const arraySize = numberList.length;
    const resultArray = [];

    resultArray[0] = numberList[0];

    for (let i = 1; i < arraySize; i++) {
        resultArray[i] = resultArray[i - 1] + numberList[i];
    }

    return resultArray;
}

let testArray = [2, 3, 7, 9];
let result = prefixSum(testArray);
console.log(result);