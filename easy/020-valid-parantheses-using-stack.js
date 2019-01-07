// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     1. Open brackets must be closed by the same type of brackets.
//     2. Open brackets must be closed in the correct order.

// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true

// Example 2:

// Input: "()[]{}"
// Output: true

// Example 3:

// Input: "(]"
// Output: false

// Example 4:

// Input: "([)]"
// Output: false

// Example 5:

// Input: "{[]}"
// Output: true

// if there is an open bracket, the next bracket should be any open bracket or a closed bracket of the same type.
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let parenStack = [];
  for (let i = 0; i <  s.length; i++) {
    if(s[i] === '(' || s[i] === '[' || s[i] === '{'  ) {
      parenStack.push(s[i]);
      continue;
    }
    let topChar = parenStack[parenStack.length - 1];
    if (s[i] === ')') {
      if (topChar === '(') {
        parenStack.pop();
      } else {
        return false;
      }
    }
    if (s[i] === ']') {
      if (topChar === '[') {
        parenStack.pop();
      } else {
        return false;
      }
    }
    if (s[i] === '}') {
      if (topChar === '{') {
        parenStack.pop();
      } else {
        return false;
      }
    }
  }
  if (parenStack.length > 0) {
    return false;
  } else {
    return true;
  }
    
};