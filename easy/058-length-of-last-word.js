// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5

//start 11:54
//finish 12:08
let s = "         "; // 1

var lengthOfLastWord = function(s) {
    // split the string into words array
    // remove all the empty indexes in words array 
    // if array is empty return 0
    // else return length of last word

    let wordsArr = s.split(' ');

    for (let i = wordsArr.length - 1; i >= 0; i-- ) {
      if(wordsArr[i].length === 0) {
        wordsArr.splice(i, 1);
      } 
    }
    if(wordsArr.length === 0){
      return 0;
    } else {
      return (wordsArr[wordsArr.length -1].length);
    }
    
};

console.log(lengthOfLastWord(s));