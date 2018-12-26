"""  Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?  """

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

#  use hash table to store nodes. check if current node has already been stored


class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """

        # initialize current node
        currentNode = head
        # initialize hash table
        nodeDict = {}
        # keep running while node exists
        while currentNode:
            # check if current node has already been stored in dict
            if currentNode in nodeDict:
                return True
            # add current node to the dict
            nodeDict[currentNode] = None
            # move to the next node
            currentNode = currentNode.next
        # return false if the node has already been stored in the hash table
        return False

# two pointer method. if there is a cycle the two pointers will eventually meet


class Solution2(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """

        # check for empty linked list
        if not head:
            return False

        # initialize the two pointers
        slowPointer = head
        fastPointer = head.next

        # keep running while the two pointers are not equal to each other
        while slowPointer != fastPointer:
            # check if fastPointer exists or has a next node
            #  need to check fastPointer.next == None otherwise fastPointer.next.next will throw an error
            if fastPointer == None or fastPointer.next == None:
                return False

            # move slowPointer 1 step and move fastPointer 2 steps
            slowPointer = slowPointer.next
            fastPointer = fastPointer.next.next

        # return true if the two pointers are equal
        return True
