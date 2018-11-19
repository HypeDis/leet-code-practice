""" Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V(5) and X(10) to make 4 and 9.
    X can be placed before L(50) and C(100) to make 40 and 90.
    C can be placed before D(500) and M(1000) to make 400 and 900.

Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

create a hash table with the integer value as the key and an array with all the roman numeral possiblites in place order
{1:[I,X,C,M]},
   5:[V,L,D]}
check if digit is 3 or lower, add 3 ones
check if digit is 4, one and five
check if digite is between 5 and 8, five and #-5 ones
else value is 9 , one and one[place + 1] """

num = 649

# try to increase speed by using a stack then reversing at the end.
class Solution:
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        romanConversion = {1: ['I', 'X', 'C', 'M'],
                           5: ['V', 'L', 'D']}
        place = 0
        romanList = []
        while num > 0:
            
            currentUnit = num % 10
            num = num // 10
            if currentUnit <= 3:
                romanList = [romanConversion[1][place]] * currentUnit + romanList
            elif currentUnit == 4:
                romanList = [romanConversion[1][place] +
                             romanConversion[5][place]] + romanList
            elif currentUnit >= 5 and currentUnit <= 8:
                romanList = [romanConversion[5][place] + romanConversion[1][place] * (currentUnit - 5) ] + romanList
            else:
                romanList = [romanConversion[1][place] + romanConversion[1][place + 1 ]] + romanList
            place += 1
        return ''.join(romanList)


soln = Solution()
print(soln.intToRoman(num))
