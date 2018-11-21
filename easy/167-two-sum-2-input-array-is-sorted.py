""" Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

    Your returned answers (both index1 and index2) are not zero-based.
    You may assume that each input would have exactly one solution and you may not use the same element twice.

Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

 """


class Solution:
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """

        # for each index in the array start from the middle of the remaining values and go right or left depending on the sum of those two values
        for idx, num in enumerate(numbers):
            # skip over duplicate values but leave one double pair [0,0,0,0,1] will start from [0,0,1] etc
            if idx + 2 < len(numbers) - 1 and num == numbers[idx + 2]:
                continue
            midIdx = (len(numbers) - idx) // 2 + idx
            midVal = numbers[midIdx]
            sum = num + midVal
            if sum == target:
                return [idx + 1, midIdx + 1]

            elif sum > target:

                leftNums = numbers[idx + 1: midIdx + 2:]
                for jdx, num2 in enumerate(leftNums):
                    sum = num + num2
                    if sum == target:
                        return [idx + 1, jdx + 1 + idx + 1]

            else:
                rightNums = numbers[midIdx + 1: len(numbers):]
                for kdx, num3 in enumerate(rightNums):
                    sum = num + num3
                    if sum == target:
                        return [idx + 1, kdx+2+midIdx]
            while num == numbers[idx + 1]:
                idx += 1
