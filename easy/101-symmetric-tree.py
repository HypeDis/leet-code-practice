# Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

# For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

#     1
#    / \
#   2   2
#  / \ / \
# 3  4 4  3

# But the following [1,2,2,null,3,null,3] is not:

#     1
#    / \
#   2   2
#    \   \
#    3    3

# Note:
# Bonus points if you could solve it both recursively and iteratively.

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        # check for empty tree
        if root == None:
            return True

        # split each root into 2 separate trees and keep checking against each other
        def checkTwoRoots(root1, root2):
            # if we reach the end of both branches
            if root1 == None and root2 == None:
                return True
            # if one node exists and the other does not
            elif root1 == None or root2 == None:
                return False
            # if the node values are not equal
            elif root1.val != root2.val:
                return False
            # move to the next pair of nodes
            else:
                return checkTwoRoots(root1.left, root2.right) and checkTwoRoots(root1.right, root2.left)

        return checkTwoRoots(root.left, root.right)
