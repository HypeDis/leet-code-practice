"""
 Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
    ...

Example 1:

Input: 1
Output: "A"

Example 2:

Input: 28
Output: "AB"

Example 3:

Input: 701
Output: "ZY"
"""


class Solution:
    def convertToTitle(self, n):
        """
        :type n: int
        :rtype: str
        """
        columnTitle = ''

        # need to start 1  ord before "A" because remainder 1 = 'A'
        A_int = ord('A') - 1

        while n > 0:
            charInt = n % 26

            # case for when no remainder -> 'Z'
            if charInt == 0:
                charInt = 26

            char = chr(A_int + charInt)
            columnTitle = char + columnTitle
            n = n - charInt
            n = n // 26

        return columnTitle


soln = Solution()
print(soln.convertToTitle(52))
