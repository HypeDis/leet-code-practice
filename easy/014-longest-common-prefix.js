
// var longestCommonPrefix = function (strs) {
//   // find the smallest word
//   // iterate through the letters in the top loop
//   // iterate through the word indexes in the second loop

//   if (strs.length === 1) {
//     return strs[0]
//   } else if (strs.length === 0) {
//     return ''
//   }
//   // check the currentLetter of each word in the array against each other
//   let currentLetter = 0 // initialize
//   let prefix = ''
//   let matching = true

//   while (matching) {
//     let strCheck = strs[0][currentLetter] // initialize the letter to check against

//     // check if each word contains the strCheck letter
//     for (let j = 1; j < strs.length; j++) {
//       if (strs[j][currentLetter] !== strCheck || !strs[j][currentLetter]) {
//       // kill the while loop if letters don't match or the index is longer than the word
//         matching = false
//         break
//       }
//       if (j === strs.length - 1) {
//         // if we checked each word (end of the strs array) and havn't broken the loop yet
//         // add the current letter to prefix variable
//         prefix = prefix + strCheck
//       }
//     }
//     currentLetter += 1
//   }
//   return prefix
// }
let strs = ['aab', 'aac', 'aad']

// removed strCheck and integrated the checking logic in to the if statement
// the if statment checks the two indexes next to each other instead of having an absolute variable to check against
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return ''
  } else if (strs.length === 1) {
    return strs[0]
  }

  let currentLetter = 0
  let matching = true
  let prefix = ''
  while (matching) {
    for (let i = 0; i < strs.length - 1; i++) {
      if (strs[i][currentLetter] === strs[i + 1][currentLetter] && strs[i][currentLetter]) {
        continue
      } else {
        matching = false
        break
      }
    }
    if (matching) {
      prefix += strs[0][currentLetter]
      currentLetter += 1
    }
  }
  return prefix
}
// ***summary:
// initialize letter pointer using the first letter of the first word
// run a while loop that checks that the letters match
// move on to the next letter until they stop matching or reaching the end of the first word
// console.log(longestCommonPrefix(strs))
console.log(longestCommonPrefix(strs))
