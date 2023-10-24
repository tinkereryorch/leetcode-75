// LeetCode 605 - Can Place Flowers


// Solution 
const canPlaceFlowers = (flowerbed, n) => {
    const zeroCount = calculateAmountOfZeroes(flowerbed);
    console.log('The amount of zeroes in the flowerbed is: ', zeroCount);
}

const calculateAmountOfZeroes = (flowerbed) => {
    let zeroCount = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0) {
            ++zeroCount;
        }
    }

    return zeroCount;
}

let flowerbed = [1, 0, 0, 0, 1];
let n = 2;
canPlaceFlowers(flowerbed, n);