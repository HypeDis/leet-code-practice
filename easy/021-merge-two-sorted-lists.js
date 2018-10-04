// start 11:42am
// finish 12:26
// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

let l1 = {
  val: 1,
  next: { val: 2, next: { val: 4, next: null } } }

let l2 = {
  val: 1,
  next: { val: 3, next: { val: 4, next: null } } }

// let l1 = {val:2, next:null}
// let l2 = {val:1, next:null}

// let l1
// let l2 = {val:1, next:null}

function ListNode (val) {
  this.val = val
  this.next = null
}

// **code above this line is for testing purposes only. it does not go in the leetcode submit box
// ----------------------------------------------------------------------------------------------------

var mergeTwoLists = function (l1, l2) {
  // initial check to see if there is no data or only one list
  if (!l1) {
    if (l2) {
      return l2
    } else {
      return []
    }
  } else if (!l2) {
    return l1
  }

  let l3 = new ListNode()

  let currentNodeL3 = l3
  let nodeExists = true

  while (nodeExists) {
    if ((l1 && !l2) || (l1 && l1.val <= l2.val)) {
      currentNodeL3.val = l1.val
      l1 = l1.next
    } else {
      currentNodeL3.val = l2.val
      l2 = l2.next
    }

    // create a new node if there are still nodes to splice
    if (l1 || l2) {
      currentNodeL3.next = new ListNode()
      currentNodeL3 = currentNodeL3.next
    }

    // kill the loop if there are no more nodes left
    if (!l1 && !l2) {
      nodeExists = false
    }
  }
  return l3
}

console.log(mergeTwoLists(l1, l2))
