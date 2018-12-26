/*
Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3

Example 2:

Input: dividend = 7, divisor = -3
Output: -2

Note:

    Both dividend and divisor will be 32-bit signed integers.
    The divisor will never be 0.
    Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const isNeg = !(dividend >= 0 && divisor > 0) && !(dividend <= 0 && divisor < 0)
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  if (dividend >= Math.pow(2, 31) - 1 && divisor === 1) {
    if (isNeg) {
      return Math.pow(-2, 31)
    } else {
      return Math.pow(2, 31) - 1
    }
  }

  let dividendRemaining = dividend
  let tempDivisor = divisor
  let quotient = 0
  let tempQ = 1

  while (dividendRemaining >= divisor) {
    dividendRemaining = dividendRemaining - tempDivisor
    // double the quotient and divisor each pass
    quotient += tempQ
    tempDivisor += tempDivisor
    tempQ += tempQ

    // reset the tempDivisor if its too big
    if (tempDivisor > dividendRemaining && tempDivisor > divisor) {
      tempDivisor = divisor
      tempQ = 1
    }
  }

  if (isNeg) {
    quotient = -quotient
  }
  return quotient
}
console.log(divide(-100, 2))
