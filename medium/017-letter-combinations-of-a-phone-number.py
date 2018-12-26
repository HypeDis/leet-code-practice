# 17. Letter Combinations of a Phone Number
# Medium

# Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

# A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

# Example:

# Input: "23"
# Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

# Note:

# Although the above answer is in lexicographical order, your answer could be in any order you want.


digits = "23"


class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        self.combos = []

        if len(digits) == 0:
            return self.combos

        # conversion table
        self.numToChar = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        }

        self.getCombos(digits, 0, '')

        return self.combos

    def getCombos(self, digits, index, currentCombo):
        #  base case.
        if index == len(digits):
            return self.combos.append(currentCombo)

        # recurse through each char in the current digit
        for char in self.numToChar[digits[index]]:
            self.getCombos(digits, index + 1, currentCombo + char)


soln = Solution()
print(soln.letterCombinations(digits))
