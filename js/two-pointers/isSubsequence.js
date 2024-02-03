// LeetCode 392 - Is Subsequence

var isSubsequence = function(s, t) {
    let index = 0;
    
    if (s.length > t.length) {
        return false;
    }

    for (let i = 0; i < t.length; i++) {
        if(s[index] === t[i]) {
            index++;
            if (index === s.length) {
                break;
            }
        }
    }
    return s.length === index;
};

const s = 'abc';
const t = 'ahbgdc';
let result = isSubsequence(s, t);
console.log(result);