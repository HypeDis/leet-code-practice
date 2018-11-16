""" Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

    Only the space character ' ' is considered as whitespace character.
    Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

Example 1:

Input: "42"
Output: 42

Example 2:

Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.

Example 3:

Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

Example 4:

Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical
             digit or a +/- sign. Therefore no valid conversion could be performed.

Example 5:

Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.

 """
# turn string to array
# check first non whitespace
# check if the first char after segative sign is a number
# keep going until a non number char is reached


class Solution:
    def myAtoi(self, str):
        """
        :type str: str
        :rtype: int
        """
        currentIndex = 0
        numberList = []
        hasNegative = False
        hasPlus = False

        while currentIndex < len(str):
            # only skips blank spaces in the beginning of the string. could probably use a trim method to do the same thing
            if str[currentIndex] == ' ' and len(numberList) == 0 and hasNegative == False and hasPlus == False:
                currentIndex += 1
                continue

            # check if the - and + are unique and appear before the numbers
            elif str[currentIndex] == '-':
                if hasNegative == False and hasPlus == False and len(numberList) == 0:
                    hasNegative = True
                else:
                    break
            elif str[currentIndex] == '+':
                if hasPlus == False and hasNegative == False and len(numberList) == 0:
                    hasPlus = True
                else:
                    break
            # try converting char to an int. if it passes add the string version of the number to number list
            else:
                try:
                    int(str[currentIndex])
                except:
                    break
                number = int(str[currentIndex])
                numberList.append('%d' % (number))

            currentIndex += 1

        if len(numberList) > 0:
            total = int(''.join(numberList))
        else:
            return 0

        if hasNegative == True:
            total *= -1
        # check if the number is out of bounds (32bit integer)
        if total < -2**31:
            return -2**31

        if total > 2**31 - 1:
            return 2**31 - 1

        return total


soln = Solution()
print(soln.myAtoi("words and 987"))
