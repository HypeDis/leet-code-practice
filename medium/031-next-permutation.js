/* Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length < 2) {
    return nums
  }

  // traverse the array from the right side until the left value is smaller than the right value
  let leftSwap = nums.length - 1
  while (nums[leftSwap] <= nums[leftSwap - 1]) {
    leftSwap -= 1
  }
  leftSwap -= 1

  // if you reach the final index the list is already at its final permutation. return ascending order list
  if (leftSwap === 0) {
    nums.sort((a, b) => a - b)
    return
  }

  // find the smallest value thats larger than leftSwap
  let rightSwap = leftSwap + 1
  while (nums[rightSwap] > nums[leftSwap]) {
    rightSwap += 1
  }
  rightSwap -= 1
  //  swap the two positions then sort the tail of the array in ascending order
  let temp = nums[leftSwap]
  nums[leftSwap] = nums[rightSwap]
  nums[rightSwap] = temp
  nums.push.apply(nums, nums.splice(leftSwap + 1).sort((a, b) => a - b))
}

// nums = [1]
let nums = [5, 4, 7, 5, 3, 2]
// let nums = [1, 3, 2]

// Expected
// [5,5,2,3,4,7]

// [2,1,3]
nextPermutation(nums)
console.log(nums)
