# Given a string, find the length of the longest substring without repeating characters.

# Example 1:

# Input: "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

# Example 2:

# Input: "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.

# Example 3:

# Input: "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

# for each index keep adding another letter and check if it has any repeats by creating a set and checking if the lengths match.
#
# s = "au"
s = "pwwkew"
# s = "bbbbb"
# s = ""

# utilized the sliding window technique


class Solution:
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        # corner case when string is empty or just 1 character
        if len(s) == 0 or len(s) == 1:
            return len(s)

        # initialize the sliding index. no need for a left index since we just pop off the first index when we slide
        pointer = 1
        # initialize the first element in the substring
        currentSubStrArr = [s[0]]
        # initialize the maxcount
        maxCount = len(currentSubStrArr)

        # iterate through the string until the right pointer hits the end
        while pointer <= len(s):
            #  create a set of the current subStr array
            currentSet = set(currentSubStrArr)
            # check if all the values in the substr array are unique
            if len(currentSet) == len(currentSubStrArr):
                # update max count if the new substring is bigger
                if len(currentSubStrArr) > maxCount:
                    maxCount = len(currentSubStrArr)

                # only add to the substring array if the right pointer is still in range of original string
                # was having some issues when this if statement was not there
                # because the substrArr would be updated but we would not check for uniqueness until the next round
                # where pointer would be out of range if the unique substring was at the end of the string. ex: 'au'
                if pointer < len(s):
                    currentSubStrArr.append(s[pointer])

            else:
              # if the substring has non unique characters shift the window over one to the right
              # only if the right index is still in range of s
                if pointer < len(s):
                    currentSubStrArr.append(s[pointer])
                # remove the left most element in the substring
                currentSubStrArr.pop(0)

            # move the pointer over one to the right
            pointer += 1
        return maxCount


soln = Solution()
print(soln.lengthOfLongestSubstring(s))
