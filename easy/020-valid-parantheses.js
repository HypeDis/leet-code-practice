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
let s = '()[]{}'

var isValid = function (s) {
  let count = 0
  let sArr = s.split('')

  parenChecker()

  // whenever we find a match (open and close bracket of same type) we remove them then begin checking again from the previous index
  function parenChecker () {
    if (sArr.length === 0 || count > sArr.length - 1) {
      return
    }
    if (sArr[count] === '(') {
      if (sArr[count + 1] === ')') {
        sArr = removeElements(sArr, count + 1)
        // count = 0
        if (count !== 0) {
          count -= 1
        }

        parenChecker()
      } else {
        count += 1
        parenChecker()
      }
    }
    if (sArr[count] === '[') {
      if (sArr[count + 1] === ']') {
        sArr = removeElements(sArr, count + 1)
        // count = 0
        if (count !== 0) {
          count -= 1
        }
        parenChecker()
      } else {
        count += 1
        parenChecker()
      }
    }
    if (sArr[count] === '{') {
      if (sArr[count + 1] === '}') {
        sArr = removeElements(sArr, count + 1)
        // count = 0
        if (count !== 0) {
          count -= 1
        }
        parenChecker()
      } else {
        count += 1
        parenChecker()
      }
    }
  }

  function removeElements (array, position) {
    let cutArray1 = array.splice(position + 1)
    let cutArray2 = array.splice(0, position - 1)
    let newArray = cutArray2.concat(cutArray1)
    return newArray
  }

  if (sArr.length === 0) {
    return true
  } else {
    return false
  }
}

console.log(isValid(s))
