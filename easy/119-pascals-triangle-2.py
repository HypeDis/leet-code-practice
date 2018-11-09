# Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

# Note that the row index starts from 0.
# Follow up:

# Could you optimize your algorithm to use only O(k) extra space?


# class Solution:
#     def getRow(self, rowIndex):
#         """
#         :type rowIndex: int
#         :rtype: List[int]
#         """
#         currentRow = [1]
#         while rowIndex > 0:
#             previousRow = currentRow
#             currentRow = [1]
#             if len(previousRow) > 1:
#                 for previousIndex in range(len(previousRow))[:len(previousRow) - 1:]:
#                     currentRow.append(
#                         previousRow[previousIndex] + previousRow[previousIndex + 1])
#             currentRow.append(1)
#             rowIndex -= 1
#         return currentRow

# only use 1 list using list concatenation
class Solution:
    def getRow(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
        # initialize currentrow
        currentRow = [1]
        # only runs if index is greater than 0
        # iterate row by row
        for i in range(1, rowIndex + 1):
            # list concatenation. [1] + [...sum of 2 adjacent indexes] + [1]
            currentRow = [1] + [(currentRow[j] + currentRow[j + 1])
                                for j in range(i-1)] + [1]
        return currentRow
