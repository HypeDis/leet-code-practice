""" Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 """

# nums = [-1, 2, 1, -4]
# target = 1
nums = [0, 2, 1, -3]
target = 1


class Solution:
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        nums.sort()
        print(nums)
        currentClosest = None

        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            lP = i + 1
            rP = len(nums) - 1

            while lP < rP:
                currentSum = nums[i] + nums[lP] + nums[rP]
                if currentClosest == None:
                    currentClosest = currentSum
                elif abs(currentSum - target) < abs(currentClosest - target):
                    currentClosest = currentSum

                if currentSum < target:
                    lP += 1
                else:
                    rP -= 1

        return currentClosest


soln = Solution()
print(soln.threeSumClosest(nums, target))
