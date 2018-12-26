/* Given a linked list, swap every two adjacent nodes and return its head.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.

Note:

    Your algorithm should use only constant extra space.
    You may not modify the values in the list's nodes, only nodes itself may be changed. */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head === null) {
    return head
  }
  if (head.next === null) {
    return head
  }
  // initial swap
  let prevNode = head
  let currentNode = prevNode.next
  let nextNode = currentNode.next
  currentNode.next = prevNode
  prevNode.next = nextNode
  head = currentNode
  prevNode = head.next

  while (prevNode.next != null) {
    currentNode = prevNode.next
    nextNode = currentNode.next
    if (nextNode === null) {
      break
    }
    currentNode.next = nextNode.next
    prevNode.next = nextNode
    nextNode.next = currentNode
    prevNode = currentNode
  }
  return head
}
