""" 34. Find First and Last Position of Element in Sorted Array
Medium

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1] """


class Solution:
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        if len(nums) < 1:
            return [-1, -1]
        leftP = 0
        rightP = len(nums) - 1
        positions = []
        centerP = (rightP + leftP) // 2
        while leftP < rightP:
            if nums[leftP] == target and nums[rightP] == target:
                break
            if nums[centerP] == target:
                leftP = centerP
                rightP = centerP
                while leftP > 0 and nums[leftP - 1] == target:
                    leftP -= 1
                while rightP < len(nums) - 1 and nums[rightP + 1] == target:
                    rightP += 1
                break
            if nums[centerP] > target:
                rightP = centerP - 1
                centerP = (rightP + leftP) // 2
            elif nums[centerP] < target:
                leftP = centerP + 1
                centerP = (rightP + leftP) // 2
            else:
                leftP += 1
                rightP -= 1
                centerP = (rightP + leftP) // 2

        if nums[leftP] == target:
            positions.append(leftP)
        else:
            positions.append(-1)
        if nums[rightP] == target:
            positions.append(rightP)
        else:
            positions.append(-1)
        return positions


nums = [1, 2, 4, 4, 5, 6, 7, 8, 8, 8, 9]
target = 4
soln = Solution()
print(soln.searchRange(nums, target))
