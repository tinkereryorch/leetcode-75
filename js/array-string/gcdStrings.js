// LeetCode 1768 - Greatest Common Divisor of Strings

// Solution
const gcdOfStrings = (str1, str2) => {
    let x = '';

    if (str1.concat(str2) != str2.concat(str1)) { return ''}

    let gcd = (x, y) => {
        if (y === 0) {
            return x;
        }

        return gcd(y, x % y);
    }

    let wordParticle = gcde(str1.length, str2.length);

    return str1.slice(0, wordParticle);
}