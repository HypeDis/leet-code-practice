""" Given an array nums of n integers and an integer target, are there elements a, b, c, and d in
nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
] """

# nums = [-3, -2, -1, 0, 0, 1, 2, 3]
# target = 0
# expected:[[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

# nums = [1, 0, -1, 0, -2, 2]
# target = 0
# expected:[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]


# nums = [1, 0, -1, 0, -2, 2]
# target = 0

nums = [-4, -3, -2, -1, 0, 0, 1, 2, 3, 4]
target = 0
# [[-4,-3,3,4],[-4,-2,2,4],[-4,-1,1,4],[-4,-1,2,3],[-4,0,0,4],[-4,0,1,3],[-3,-2,1,4],[-3,-2,2,3],[-3,-1,0,4],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]


class Solution:
    def fourSum(self, nums, target):
        twoSums = {}
        solutions = set()

        # create a hashtable with all possible 2 sum values
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                sum = nums[i] + nums[j]
                if sum in twoSums:
                    twoSums[sum].append((i, j))
                else:
                    twoSums[sum] = [(i, j)]

        # if a pair of twoSums is in the dictionary find all
        # possible index positions that dont collide with each other
        # multiple same solutions will be ignored bc 'solutions' is a set.
        for key in twoSums:
            otherSum = target - key
            if otherSum in twoSums:
                sumList1 = twoSums[key]
                sumList2 = twoSums[otherSum]
                for (i, j) in sumList1:
                    for (k, l) in sumList2:
                        if i != k and i != l and j != k and j != l:
                            targetList = [nums[i], nums[j], nums[k], nums[l]]
                            targetList.sort()
                            solutions.add(tuple(targetList))

        return list(solutions)


soln = Solution()
print(soln.fourSum(nums, target))
