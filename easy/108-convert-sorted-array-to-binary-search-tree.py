# Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

# For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

# Example:

# Given the sorted array: [-10,-3,0,5,9],

# One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

#       0
#      / \
#    -3   9
#    /   /
#  -10  5

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


def populateTree(nodeArray):
    # base case
    if len(nodeArray) == 0:
        return None
    #  find mid point of the array
    midPoint = len(nodeArray) // 2
    # create a left and right array
    leftArray = nodeArray[:midPoint:]
    rightArray = nodeArray[midPoint + 1::]

    # make midpoint the current node
    node = TreeNode(nodeArray[midPoint])

    # recursively run the function with the left and right arrays
    node.left = populateTree(leftArray)
    node.right = populateTree(rightArray)
    # return the node when finished
    return node


class Solution:
    def sortedArrayToBST(self, nums):
        """
        :type nums: List[int]
        :rtype: TreeNode
        """
        return populateTree(nums)
