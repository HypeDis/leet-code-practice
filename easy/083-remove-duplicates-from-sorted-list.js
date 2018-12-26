var deleteDuplicates = function(head) {

	if ( head === null) {
		return head
	} else {
      if (head.next != null && head.val === head.next.val) {
       // console.log('delete')
		    head.next = head.next.next 
        deleteDuplicates(head)
	    }
    
      deleteDuplicates(head.next)
  }
	return head
};