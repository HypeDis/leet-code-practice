# Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


class Solution:
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        # corner case: no rows
        if numRows < 1:
            return []
        # initiazlize list
        pascalList = [[1]]

        if numRows > 1:
            # start from 2nd row
            for currentRow in range(numRows)[1:numRows:1]:
                # initialize currentrow
                currentRowList = [1]
                # load in previous row
                previousRowList = pascalList[currentRow - 1]
                # skip this step for 2nd row
                if len(previousRowList) > 1:
                    # add two conccurrent values in previousRowList and insert into current row
                    # only iterate to penultimate index
                    for previousRowIndex in range(len(previousRowList) - 1):
                        currentRowList.append(
                            previousRowList[previousRowIndex] + previousRowList[previousRowIndex + 1])
                # push the final 1 into current row (didnt initialize currentRow with [1,1] for optimization purposes)
                currentRowList.append(1)
                # add currentRow to the pascal List
                pascalList.append(currentRowList)
        return pascalList
