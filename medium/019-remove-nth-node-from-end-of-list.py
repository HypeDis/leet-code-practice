""" 19. Remove Nth Node From End of List
Medium

Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:

Given n will always be valid.

Follow up:

Could you do this in one pass? """

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        prevNode = None
        currNode = head
        scanNode = currNode

        while scanNode:
            # look ahead to see if scanNode is the last node
            for i in range(n-1):
                scanNode = scanNode.next
            if scanNode.next == None:
                # if prevNode exists cut out currNode and join the new list together
                if prevNode:
                    prevNode.next = currNode.next
                # if there is no prevNode the node after the deleted node becomes the head
                else:
                    head = currNode.next
                break
            # iterate one step down the list
            prevNode = currNode
            currNode = currNode.next
            scanNode = currNode
        return head
