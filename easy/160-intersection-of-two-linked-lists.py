""" Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:

A:                   a1 → a2
                             ↘
                               c1 → c2 → c3
                              ↗
B:     b00 -> b0->b1 → b2 → b3

begin to intersect at node c1.

Notes:

    If the two linked lists have no intersection at all, return null.
    The linked lists must retain their original structure after the function returns.
    You may assume there are no cycles anywhere in the entire linked structure.
    Your code should preferably run in O(n) time and use only O(1) memory. """

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """
        currentNodeA = headA
        currentNodeB = headB

        # create a hash table with all of the nodes of linked list A. Takes O(n) time to create table and O(n) space
        list_A_Table = {}

        while currentNodeA:
            list_A_Table[currentNodeA] = None
            currentNodeA = currentNodeA.next

        # check if a node in linked list B is in linked list A. worst case: O(n)
        while currentNodeB:
            if currentNodeB in list_A_Table:
                return currentNodeB
            currentNodeB = currentNodeB.next
        return None


# using the 2 pointer method from solutions O(n) time and O(1) space
class Solution2(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """
        pointerA = headA
        pointerB = headB

        # check for empty linked lists
        if pointerB == None or pointerA == None:
            return None

        pASwitch = False
        pBSwitch = False

        while pointerA or pointerB:

            if pointerA == pointerB:
                return pointerA
            pointerA = pointerA.next
            pointerB = pointerB.next

            # switch list if reaching last node
            if pointerA == None and pASwitch == False:
                pointerA = headB
                pASwitch = True

            if pointerB == None and pBSwitch == False:
                pointerB = headA
                pBSwitch = True

            # check if both lists have switched and either one reaches the end of the 2nd list
            if pointerA == None or pointerB == None and pBSwitch == True and pASwitch == True:
                return None
