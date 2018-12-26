// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
// start 11:55 am
// finish 12:06 pm

let nums = [-2,1,-3,4,-1,2,1,-5,4];

// var maxSubArray = function(nums) {
  // create a global maximum sum var
  // for each index find the maximum sum 
  // check against global value and replace if bigger

  //initialize globalMax as the first index in case it is negative
//   let globalMax = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     let currentSum = nums[i];
//     if (currentSum > globalMax) {
//       globalMax = currentSum;
//     }
//     if(i + 1 < nums.length) {
//       for (let j = i + 1; j < nums.length; j++) {
//         currentSum += nums[j];
//         if (currentSum > globalMax) {
//           globalMax = currentSum;
//         }
//       }
//     }
    
//   }
//     return globalMax;
// };



// adjusted the previous solution so it only starts the summing process if the index is positive
var maxSubArray = function(nums) {
  // skeleton:
  // create a global maximum sum var
  // for each index find the maximum sum 
  // check against global value and replace if bigger

  //initialize globalMax as the first index in case it is negative
  let globalMax = nums[0];
  for (let i = 0; i < nums.length; i++) {
    // case for when all the values are negative. 
    //it will just return the least negative number
    if (nums[i] > globalMax) {
      globalMax = nums[i];
    }
    // only runs the loop if the index is positive
    if(nums[i] > 0) {
      let currentSum = nums[i];
      //checks the value of the first index in the loop against globalMax
      if (currentSum > globalMax) {
        globalMax = currentSum;
      }
      // checks the contiguous sums for max value
      if(i + 1 < nums.length) {
        for (let j = i + 1; j < nums.length; j++) {
          currentSum += nums[j];
          if (currentSum > globalMax) {
            globalMax = currentSum;
          }
        }
      }
    }
    
    
  }
    return globalMax;
};

console.log(maxSubArray(nums))