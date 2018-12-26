""" 11. Container With Most Water
Medium

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, 
such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

 

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49 """

# area = min(a1, a2)*(i2-i1)

# height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
# height = [2, 3, 4, 5, 18, 17, 6]
height = [1, 1]


class Solution:
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        maxArea = 0
        leftPointer = 0
        rightPointer = len(height) - 1
        while rightPointer - leftPointer > 0:
            area = min(height[rightPointer], height[leftPointer]
                       ) * (rightPointer - leftPointer)
            if area > maxArea:
                maxArea = area
            if min(height[leftPointer], height[rightPointer]) == height[leftPointer]:
                leftPointer += 1
            else:
                rightPointer -= 1
        return maxArea


soln = Solution()
print(soln.maxArea(height))
