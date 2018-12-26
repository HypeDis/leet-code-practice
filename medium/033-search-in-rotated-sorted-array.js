/* 33. Search in Rotated Sorted Array
Medium

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1 */

// find length of the array
// start search from the middle
// ex [100 101 97 98 99]
// check first and last node to determine which direction to search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length < 3) {
    return nums.indexOf(target)
  }
  let leftPointer = 0
  let rightPointer = nums.length - 1
  let centerPointer = Math.floor((leftPointer + rightPointer) / 2)
  while (rightPointer > leftPointer) {
    if (nums[leftPointer] === target) {
      return leftPointer
    }
    if (nums[centerPointer] === target) {
      return centerPointer
    }
    if (nums[rightPointer] === target) {
      return rightPointer
    }
    if (nums[rightPointer] > nums[leftPointer]) {
      // if the entire range is ordered choose the left half or the right half based on where the target should be
      if (nums[centerPointer] > target) {
        rightPointer = centerPointer - 1
        centerPointer = Math.floor((leftPointer + rightPointer) / 2)
      } else {
        leftPointer = centerPointer + 1
        centerPointer = Math.floor((leftPointer + rightPointer) / 2)
      }
    } else if (nums[leftPointer] < nums[centerPointer]) {
      // if left half is ordered check if target is in left half else selct the right half
      if (target > nums[leftPointer] && target < nums[centerPointer]) {
        rightPointer = centerPointer - 1
        centerPointer = Math.floor((leftPointer + rightPointer) / 2)
      } else {
        leftPointer = centerPointer + 1
        centerPointer = Math.floor((leftPointer + rightPointer) / 2)
      }
    } else if (nums[rightPointer] > nums[centerPointer]) {
      // if right half is ordered check if target is in right half else pick left half
      if (target < nums[rightPointer] && target > nums[centerPointer]) {
        leftPointer = centerPointer + 1
        centerPointer = Math.floor((leftPointer + rightPointer) / 2)
      } else {
        rightPointer = centerPointer - 1
        centerPointer = Math.floor((leftPointer + rightPointer) / 2)
      }
    } else {
      // if no conditions are met move the right and left pointers closer to each other (happend when right pointer, center pointer, or left pointer are in same spot)
      rightPointer -= 1
      leftPointer += 1
    }
  }
  // if target is not found return - 1
  return -1
}

// let nums = [4, 5, 6, 7, 0, 1, 2]
// let target = 3
let nums = [4, 5, 6, 7, 8, 1, 2, 3]
let target = 8
// nums = [4, 5, 6, 7, 0, 1, 2]
// target = 1
// nums = [4, 5, 6, 7, 0, 1, 2]
// target = 5

console.log(search(nums, target))
