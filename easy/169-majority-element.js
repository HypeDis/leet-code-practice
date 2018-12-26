/*  Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3

Example 2:

// Input: [2,2,1,1,1,2,2]
Output: 2 */
nums = [2,2,1,1,1,2,2]
 


/**
 * @param {number[]} nums
 * @return {number}
 */
// O(logN) because of sort
var majorityElement = function(nums) {

  if (nums.length < 3) {
    return nums[0]
  }
  else {
	  nums.sort()
    return nums[Math.floor(nums.length/2)]
  }
}
// try creating a hashmap

console.log(majorityElement(nums))