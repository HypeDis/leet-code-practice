// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// Each number in candidates may only be used once in the combination.

// Note:

//     All numbers (including target) will be positive integers.
//     The solution set must not contain duplicate combinations.

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]

// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]
let candidates = [2,5,2,1,2];
let target = 5;


const combinationSum2 = function(candidates, target) {
  candidates.sort();
  let combos = {};
  search(candidates, target, 0, [], combos);
  let combosArr = [];
  for (let key in combos) {
    let combo = key.split(',');
    combo = combo.map(numStr => parseInt(numStr));
    combosArr.push(combo)
  }
  return combosArr;
};

function search(nums, target, currentIndex, currentCombo, combos) {
  if (target < 0) {
    return;
  }
  if (target === 0) {
    combos[currentCombo] = null;
    return;
  }
  for (let i = currentIndex; i < nums.length; i++) {
    search(nums, target - nums[i], i + 1, currentCombo.concat(nums[i]), combos)
  }
}

console.log(combinationSum2(candidates, target));

