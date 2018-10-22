

a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"

# output = "110111101100010011000101110110100000011101000101011010000000000000000000000000000000000000000000000"
# expected = "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"


class Solution:
    def addBinary(self, a, b):
        a = int(a)
        b = int(b)
        c = a + b
        c = str(c)
        if(c == '0'):
            return '0'

        decimalNum = 0
        binArr = []
        place = len(c) - 1

        for digit in c:
            digit = int(digit)
            decimalNum += digit * 2 ** place
            place -= 1

        while decimalNum >= 1:
            binArr.insert(0, str(decimalNum % 2))
            decimalNum = decimalNum // 2

        return ''.join(binArr)


soln = Solution()
soln.addBinary(a, b)
