/* Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

    All numbers (including target) will be positive integers.
    The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]

Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
] */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// let candidates = [2,3,5]; 
// let target = 8;
candidates = [8,7,4,3]
target = 11
let results = [];
var combinationSum = function(candidates, target) {
  candidates.sort();
  results = [];
  search(candidates, target, 0, []);
  return results; 
};
const search = (nums, target, currentIndex, currentArray) => {
  if (target  < 0) {
    return;
  }
  if (target === 0) {
    results.push(currentArray);
    return;
  }
  for (let i = currentIndex; i < nums.length; i++) {
    search(nums, target - nums[i], i, currentArray.concat(nums[i]))
  }
}
console.log(combinationSum(candidates, target))