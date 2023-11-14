// find Greatest Common Divisor using Euclid's algorithm
const calculateGCD = (x, y) => {

    if (y === 0){
        return x;
    }

    return calculateGCD(y, x % y);   
}

let result = calculateGCD(36, 6);
console.log(result);