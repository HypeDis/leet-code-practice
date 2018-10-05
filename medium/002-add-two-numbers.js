var addTwoNumbers = function(l1, l2) {
  // add nodes together while atleast one node exists
  // **if node does not exist default to 0 
  // carry the 1 if >10
  // ** if carry = true
  //      add 1 to the current node       
  //      carry = false
 
  let l3 = new ListNode();
  currentNodeL3 = l3;
  currentNodeL1 = l1;
  currentNodeL2 = l2;
 
  let carry = false;
  
  while(currentNodeL1 != null || currentNodeL2 != null) {
    let val1 = 0;
    let val2 = 0;
    if (currentNodeL1) {
      val1 = currentNodeL1.val 
    } 
    if (currentNodeL2) {
      val2 = currentNodeL2.val 
    }
    if (carry === false) {
      currentNodeL3.val = (val1 + val2) % 10;
      if (val1 + val2 > 9) {
        carry = true;
      }
    } else {
      currentNodeL3.val = (val1 + val2 + 1) % 10;
      if (val1 + val2 + 1 < 10) {
        carry = false;
      }
    }
    
    //only change currentNode if the next node exists else keep it at null
    if (currentNodeL1 != null) {
      currentNodeL1 = currentNodeL1.next; 
    } 
    if (currentNodeL2 != null) {
      currentNodeL2 = currentNodeL2.next;
    }
    
    // create a new l3 node if there are still l1 or l2 nodes left or if we have to carry the last digit
    if (currentNodeL1 != null || currentNodeL2 != null || carry === true) {
      currentNodeL3.next = new ListNode();
      currentNodeL3 = currentNodeL3.next;
    }
    
    // condition where we have to carry but there are no more nodes left in L1 and L2
    if (currentNodeL1 === null && currentNodeL2 === null && carry === true) {
      currentNodeL3.val = 1;
    }
    
     
  }

  
  return l3;
};