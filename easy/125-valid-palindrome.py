""" Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false """

s = "A man 123, a plan, a canal: Panama"


class Solution:
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """

        sLower = s.lower()
        # use list comprehension to filter only alphanumeric chars
        charList = [char for char in sLower if 'a' <=
                    char <= 'z' or '0' <= char <= '9']

        # check the list from the outsides in
        for i in range(len(charList) // 2):
            if charList[i] != charList[len(charList) - 1 - i]:
                return False
        return True


soln = Solution()
print(soln.isPalindrome(s))
