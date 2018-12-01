/* Given an integer n, return the number of trailing zeroes in n!.

Example 1:

Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.

Example 2:

Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.

Note: Your solution should be in logarithmic time complexity.

 */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let currentPower = 1
  let currentMultiple = 5
  let fives = 0
  while (n >= currentMultiple) {
    fives += Math.floor(n / currentMultiple)
    currentPower += 1
    currentMultiple = Math.pow(5, currentPower)
  }
  return fives
}

/**
 * all multiples of 5 must become 10 eventually since they all have an even number they can be multiplied with. 5 has one 5, 10 has one 5... 25 has 2 fives etc...
 * n/5 grabs all multiples of 5, n/25 grabs all multiples of 25 (one of the two fives in 25 was already grabbed by n/5) etc...
 * count the total number of fives in n and you will get the zeroes.
 */
