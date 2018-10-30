# Given a binary tree, find its maximum depth.

# The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# Note: A leaf is a node with no children.

# Example:

# Given binary tree [3,9,20,null,null,15,7],

#     3
#    / \
#   9  20
#     /  \
#    15   7

# return its depth = 3.
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


# something not working with this solution on certain trees
# class Solution:
#     def maxDepth(self, root):
#         """
#         :type root: TreeNode
#         :rtype: int
#         """
#         if root == None:
#             return 0

#         def findDepth(currentDepth, currentBranch):
#             if currentBranch.left == None and currentBranch.right == None:
#                 return currentDepth
#             elif currentBranch.left == None:
#                 findDepth(currentDepth + 1, currentBranch.right)
#             elif currentBranch.right == None:
#                 findDepth(currentDepth + 1, currentBranch.left)
#             else:
#                 return max(findDepth(currentDepth + 1, currentBranch.left), findDepth(currentDepth + 1, currentBranch.right))
#         return findDepth(1, root)


# soln = Solution()
# print(soln.maxDepth(tree))

class Solution:
    def maxDepth(self, root):
        # if the branch doesnt exist return 0
        if root == None:
            return 0
        # find the max depth recursively.
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
