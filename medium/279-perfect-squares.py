from collections import deque


class Solution:
    def numSquares(self, n):
        """
        :type n: int
        :rtype: int
        """
        squares = self.getPerfectSquares(n)
        squareSums = squares[:]
        squareSums = deque(squareSums)
        steps = 1
        currentBreadth = len(squareSums)
        previousSums = {}

        if n in squareSums:
            return steps

        for num in squareSums:
            previousSums[num] = None

        while (len(squareSums) > 0):
            if currentBreadth == 0:
                steps += 1
                currentBreadth = len(squareSums)

            currentSum = squareSums.popleft()
            currentBreadth -= 1

            newSums = self.addSquares(currentSum, previousSums, squares, n)
            # newSums will return True if n is reached else it will return the next iteration of sums
            if newSums == True:
                return steps + 1
            else:
                squareSums.extend(newSums)
        return 0

    def getPerfectSquares(self, n):
        squares = []
        i = 1
        while i ** 2 <= n:
            squares.append(i ** 2)
            i += 1
        return squares

    def addSquares(self, sum, prevSums, squares, target):
        res = []
        for num in squares:
            if sum + num <= target and sum + num not in prevSums:
                prevSums[sum + num] = None
                newSum = sum + num
                res.append(newSum)
                if sum + num == target:
                    return True
        return res


soln = Solution()
print(soln.numSquares(48))
# 7168
