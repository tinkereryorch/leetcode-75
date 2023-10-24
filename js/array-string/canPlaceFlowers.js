// LeetCode 605 - Can Place Flowers


// Solution 1
const canPlaceFlowers = (flowerbed, n) => {
    const zeroCount = calcualteZeroCount(flowerbed);

    if (zeroCount >= n) {
        let availableSpaces = checkAdjacency(flowerbed);        
        return availableSpaces >= n;
    } else {
        return false; 
    }
}
    

const calcualteZeroCount = (flowerbed) => {
    let zeroCount = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0) {
            ++zeroCount;
        }
    }

    return zeroCount;
}

const checkAdjacency = (flowerbed) => {
    let possibleSpace = 0; 
    let prev = 0;
    let next = 0;

    for(let i = 0; i < flowerbed.length; i++){
        prev = i - 1;
        next = i + 1;

        if (flowerbed[prev] === undefined && flowerbed[i] === 0 && flowerbed[next] === 0) {
            ++possibleSpace;
            flowerbed[i] = 1;
            continue;
        }

        if (flowerbed[prev] === 0 && flowerbed[i] === 0 && flowerbed[next] === undefined) {
            ++possibleSpace;
            flowerbed[i] = 1;
            continue;
        }

        if (flowerbed[prev] === 0 && flowerbed[i] === 0 && flowerbed[next] === 0) {
            ++possibleSpace;
            flowerbed[i] = 1;
            continue;
        }

        if (flowerbed[prev] === undefined && flowerbed[i] === 0 && flowerbed[next] === undefined) {
            ++possibleSpace;
            flowerbed[i] = 1;
            continue;
        }
    }

    return possibleSpace;
}

let flowerbed = [1, 0, 0, 0, 1];
let n = 1;
let result = canPlaceFlowers(flowerbed, n);
console.log(result);

// Solution 2 using falsy values
const checkAdjacency2 = (flowerbed) => {
    let possibleSpace = 0; 
    let prev = 0;
    let next = 0;

    for(let i = 0; i < flowerbed.length; i++){
        prev = i - 1;
        next = i + 1;

        if (!flowerbed[prev] && !flowerbed[i] && !flowerbed[next]) {
            ++possibleSpace;
            flowerbed[i] = 1;
            continue;
        }
    }

    return possibleSpace;
}