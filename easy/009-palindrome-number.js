
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// check how many digits the number is
// find the back half of the number and compare to the front half

let x = 112211

var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  let digits = Math.floor(Math.log(x) / Math.log(10)) + 1
  let palindromeCheck = 0
  let count = 0
  while (count < Math.floor(digits / 2)) {
    palindromeCheck = palindromeCheck * 10 + x % 10
    x = Math.floor(x / 10)
    count += 1
  }
  if (digits % 2 !== 0) {
    x = Math.floor(x / 10)
  }
  return x === palindromeCheck
}

console.log(isPalindrome(x))
