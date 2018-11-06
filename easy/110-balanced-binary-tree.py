# Given a binary tree, determine if it is height-balanced.

# For this problem, a height-balanced binary tree is defined as:

#     a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

# Example 1:

# Given the following tree [3,9,20,null,null,15,7]:

#     3
#    / \
#   9  20
#     /  \
#    15   7

# Return true.

# Example 2:

# Given the following tree [1,2,2,3,3,null,null,4,4]:

#        1
#       / \
#      2   2
#     / \
#    3   3
#   / \
#  4   4

# Return false.
#  for a given level in  the tree check for balance.
# keep moving levels until you either reach the end or its unbalanced.
# Definition for a binary tree node.


def checkBalance(node):
    # base case (reaches end of current branch)
    if node == None:
        return (0, True)
    leftDepth, leftBalance = checkBalance(node.left)
    rightDepth, rightBalance = checkBalance(node.right)
    isNodeBalanced = abs(leftDepth - rightDepth) <= 1

    return max(rightDepth, leftDepth) + 1, leftBalance and rightBalance and isNodeBalanced


class Solution:
    def isBalanced(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        return checkBalance(root)[1]
