// Given a non - empty array of digits representing a non - negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

//     Example 1:

// Input: [1, 2, 3]
// Output: [1, 2, 4]
// Explanation: The array represents the integer 123.

// Example 2:

// Input: [4, 3, 2, 1]
// Output: [4, 3, 2, 2]
// Explanation: The array represents the integer 4321.

//start 12:25 pm
//finish 12:35 pm

/**
 * @param {number[]} digits
 * @return {number[]}
 */

let digits = [4, 3, 2, 1];
var plusOne = function (digits) {
    // add one to the last index
    // if index = 10 => 0 and add one to n-1 index
    // keep doing this
    // if first index is 10 => 0 and add unshift 1
    digits[digits.length - 1] += 1
    for (let i = digits.length - 1; i > 0; i--) {
        if (digits[i] === 10) {
            digits[i] = 0;
            digits[i - 1] += 1;
        }
    }
    if (digits[0] === 10) {
        digits[0] = 0;
        digits.unshift(1);
    }
    return digits;
};

console.log(plusOne(digits));