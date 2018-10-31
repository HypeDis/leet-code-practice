# Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

# For example:
# Given binary tree [3,9,20,null,null,15,7],

#     3
#    / \
#   9  20
#     /  \
#    15   7

# return its bottom-up level order traversal as:

# [
#   [15,7],
#   [9,20],
#   [3]
# ]

# traverse tree recursively and add each node into its appropriate array
# append the array in to the main array.

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):

    def levelOrderBottom(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        # initialize the main tree array, the current level's values-array, and the que of nodes
        #   (a que is a data structure where the first element is always the one being removed. "first in first out")
        treeArr = []
        currentLevelVals = []
        nodeQue = []

        #  check if the root is empty
        if not root:
            return treeArr

        # load the que with the root and initialize the current level's node count
        #   (currentLevelNodeCount = how many nodes there are left to check for the current level)
        nodeQue.append(root)
        currentLevelNodeCount = 1

        # keep running loop until the que is empty
        while len(nodeQue) > 0:
            # initialize the current node by removing it from the node que (first element in the nodeQue array)
            currentNode = nodeQue.pop(0)
            # add the current node's value to the current level's values-array
            currentLevelVals += [currentNode.val]
            # decrement current level's node count
            currentLevelNodeCount -= 1

            # if the current node has children add them to the node que
            if currentNode.left:
                nodeQue.append(currentNode.left)
            if currentNode.right:
                nodeQue.append(currentNode.right)

            # if all the current level's nodes have been processed, add that level's values-array to the main tree array
            # and move on to the next level
            if currentLevelNodeCount == 0:
                # add the current level's values-array to the front of the main tree array (reverse order essentially)
                treeArr = [currentLevelVals] + treeArr
                # we are moving on to the next level so
                # reinitialize the currentLevelVals array to empty
                currentLevelVals = []
                # set the new level's node count to the length of the current node que
                #   (this is equal to the number of nodes in the next level because we have been adding only the children of the current level to the que
                #   and removing the current level's nodes as we've processed them)
                currentLevelNodeCount = len(nodeQue)

        return treeArr
