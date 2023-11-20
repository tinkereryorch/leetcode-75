// LeetCode 443 - String Compression

// Solution
const compress = (chars) => {
    let anchor = 0; 
    let write = 0; 
  
    for (let read = 0; read < chars.length; read++) {
      if (read + 1 === chars.length || chars[read] !== chars[read + 1]) {
        
        chars[write++] = chars[anchor]; 
  
        if (read > anchor) {
          const count = read - anchor + 1;
          const countDigits = count.toString().split(''); 
  
          for (const digit of countDigits) {
            chars[write++] = digit; 
          }
        }
  
        anchor = read + 1; 
      }
    }
  
    return write; 
}

let charArray = ["a","a","b","b","c","c","c"];
let result = compress(charArray);
console.log(result);