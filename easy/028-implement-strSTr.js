// implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().






// test cases 
let haystack = 'aaaa';
let needle = 'a'
// let haystack = "hello"
// let needle = "ll"
// let haystack = 'a'
// let needle = 'a'

var strStr = function(haystack, needle) {
  if(needle.length === 0) {
    return 0;
  }
  let matchingIndex = -1;
  
  //use substring to check match;
  for(let i = 0; i <= haystack.length - needle.length; i++) {
    if(haystack.substr(i, needle.length) === needle) {
      matchingIndex = i;
      break;
    } else {
      continue
    }
  }
  return matchingIndex;
};

console.log(strStr(haystack,needle))

// notes: tried using 2 nested for loops first and was getting time out errors on very large strings. 

// start 11:45
// end 12:52
// thought of substr idea at 12:40