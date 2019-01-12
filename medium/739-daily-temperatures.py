"""  Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].  """

T = [73, 74, 75, 71, 69, 72, 76, 73]


class Solution:
    def dailyTemperatures(self, T):
        days = [0] * len(T)
        tempStack = [len(T) - 1]
        for i in range(len(days))[len(days) - 2:: -1]:
            while len(tempStack) > 0 and T[i] >= T[tempStack[len(tempStack) - 1]]:
                tempStack.pop()

            if len(tempStack) > 0:
                days[i] = tempStack[len(tempStack) - 1] - i
            tempStack.append(i)
        return days


soln = Solution()
print(soln.dailyTemperatures(T))
