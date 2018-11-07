# Given a binary tree, find its minimum depth.

# The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

# Note: A leaf is a node with no children.

# Example:

# Given binary tree [3,9,20,null,null,15,7],

#     3
#    / \
#   9  20
#     /  \
#    15   7

# return its minimum depth = 2.


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def minDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root == None:
            return 0
        # recursively travel through the tree
        leftDepth = self.minDepth(root.left)
        rightDepth = self.minDepth(root.right)

        # check if the left child exists
        if root.left == None:
            return rightDepth + 1
            # check if the right child exists
        elif root.right == None:
            return leftDepth + 1
            # return the minimum depth
        return min(leftDepth, rightDepth) + 1
    

