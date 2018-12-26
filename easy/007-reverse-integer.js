// Given a 32-bit signed integer, reverse digits of an integer.

let x = 123456
console.log(x)

var reverseUsingString = function (x) {
  if (x === 0) {
    return x
  }

  let isNegative = false

  if (x < 0) {
    isNegative = true
  }

  let numberString = x.toString()
  let nStringArr = numberString.split('')
  let stringLength = nStringArr.length
  let reverseArr = []
  for (let i = stringLength - 1; i >= 0; i--) {
    reverseArr.push(nStringArr[i])
  }
  let j = 0
  while (reverseArr[j] === '0') {
    reverseArr.shift()
  }
  let reverseString = reverseArr.join('')
  let reverseNum = parseInt(reverseString)
  if (isNegative) {
    reverseNum = reverseNum * -1
  }
  if (reverseNum > 2147483647 || reverseNum < -2147483648) {
    return 0
  }
  return reverseNum
}

function reverseUsingMath (num) {
  let isNegative = false
  let maxInt = Math.pow(2, 31) - 1
  let minInt = Math.pow(2, 31) * -1
  if (num < 0) {
    isNegative = true
    num = num / -1
  }

  let revNum = Number(Array.from(num.toString()).reverse().join(''))

  if (isNegative) {
    revNum = revNum * -1
  }
  if (revNum > minInt && revNum < maxInt) {
    return revNum
  } else {
    return 0
  }
}

console.log(reverseUsingString(x))
console.log(reverseUsingMath(x))
