""" Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

Example 2:

Input: [4,1,2,1,2]
Output: 4 """

nums = [4, 1, 2, 1, 2]
from functools import reduce


class Solution:
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # use hash table to store value
        numsTable = {}
        for i in nums:
            try:
                numsTable.pop(i)
            except:
                numsTable[i] = None
        return numsTable.popitem()[0]

# alternate solution using math:
# 2(a+b+c) - (a+a+b+b+c) = c
# return 2*sum(set(nums)) - sum(nums)

# alternate solution using bit manipulation (a xor a = 0)
        # a = 0
        # for i in nums:
        #     a ^= i
        # return a


soln = Solution()
print(soln.singleNumber(nums))
