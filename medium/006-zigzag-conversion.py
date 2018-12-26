# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

# P   A   H   N
# A P L S I I G
# Y   I   R

# And then read line by line: "PAHNAPLSIIGYIR"

# Write the code that will take a string and make this conversion given a number of rows:

# string convert(string s, int numRows);

# Example 1:

# Input: s = "PAYPALISHIRING", numRows = 3
# Output: "PAHNAPLSIIGYIR"

# Example 2:

# Input:
s = "PAYPALISHIRING"
numRows = 4
# Output: "PINALSIGYAHRPI"
# Explanation:

# P     I    N
# A   L S  I G
# Y A   H R
# P     I

from functools import reduce


class Solution:
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """

        # initialize the row containers
        zigZagList = []
        for i in range(numRows):
            zigZagList.append([])

        # set the initial row and direction of the zigzag patter
        currentRow = 0
        direction = 'down'

        # iterate though each char in the string
        for char in s:

            # add the current char to the currentRow
            zigZagList[currentRow].append(char)

            # switch directions if reaching the top or bottom row
            if currentRow == 0 and direction == 'up':
                direction = 'down'
            if currentRow == numRows - 1 and direction == 'down':
                direction = 'up'

            # increment counter based on the direction of the zigzag
            # set the bounds of the rows so you cant overtravel (corner case for 1 row)
            if direction == 'down' and currentRow + 1 < numRows:
                currentRow += 1
            if direction == 'up' and currentRow - 1 >= 0:
                currentRow -= 1

        # reduce the 2d array then join the chars together
        return ''.join(reduce((lambda x, y: x + y), zigZagList))


soln = Solution()
print(soln.convert(s, numRows))
