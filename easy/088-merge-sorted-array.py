# Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

# Note:

#     The number of elements initialized in nums1 and nums2 are m and n respectively.
#     You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

# Example:

# Input:


# Output: [1, 2, 2, 3, 5, 6]
# nums1 = [1, 2, 3, 0, 0, 0]
# m = 3
# nums2 = [4, 5, 6]
# n = 3

# nums1 = [4, 0, 0, 0, 0, 0]
# m = 1
# nums2 = [1, 2, 3, 5, 6]
# n = 5
# nums1 = [0]
# m = 0
# nums2 = [1]
# n = 1
# nums1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
# m = 0
# nums2 = [-50,-50,-48,-47,-44,-44,-37,-35,-35,-32,-32,-31,-29,-29,-28,-26,-24,-23,-23,-21,-20,-19,-17,-15,-14,-12,-12,-11,-10,-9,-8,-5,-2,-2,1,1,3,4,4,7,7,7,9,10,11,12,14,16,17,18,21,21,24,31,33,34,35,36,41,41,46,48,48]
# n = 63
# nums1 = [0, 0, 0, 0, 0, 0]
# m = 0
# nums2 = [1, 2, 3, 4, 5]
# n = 5
# nums1 = [1, 2, 3, 0, 0, 0]
# m = 3
# nums2 = [2, 5, 6]
# n = 3
nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0]
m = 6
nums2 = [1, 2, 2]
n = 3


class Solution:
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: void Do not return anything, modify nums1 in-place instead.
        """
# if the num2 element is less than or equal to insert before num1 element
# else check if the next element is zero if yes then insert the next element
# else move on to the next nums1 element

        # trim nums1 array from the back until all the placeholder zeroes are removed.
        # nums1 array size is determined by 'm'
        while len(nums1) > m:
            nums1.pop()

        #  if nums1 array is empty put the first element in nums2 in to nums1
        if len(nums1) == 0:
            nums1.insert(0, nums2[0])
            nums2.pop(0)

        # initialize nums1 index
        currentIndex = 0
        # keep inserting nums2 elements in to nums1 until nums2 is completely empty
        while len(nums2) > 0:

            #  if the current nums2 element is less than or equal to the current nums1 element,
            # insert it in front of the current nums1 element
            if nums2[0] <= nums1[currentIndex]:
                nums1.insert(currentIndex, nums2[0])
                nums2.pop(0)

            # if we reach the end of nums1, insert the current nums2 element at the tail of the nums1 array
            elif currentIndex == len(nums1) - 1:
                nums1.insert(currentIndex + 1, nums2[0])
                nums2.pop(0)

            # move to the next nums1 element
            currentIndex += 1


soln = Solution()
soln.merge(nums1, m, nums2, n)
print(nums1)
