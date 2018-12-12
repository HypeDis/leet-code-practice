/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
	this.maxSize = k;
	this.length = 0;
	this.head = -1;
	this.tail = -1;
};

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.length === this.maxSize) {
		return false;
	} 
	if(this.head === -1) {
		this.head += 1;
		this.tail += 1;
	} else if (this.head <= this.tail) {
		if (this.tail === this.maxSize - 1) {
			this.tail = 0;
		} else {
			this.tail++;
		}
	} else {
		this.tail++;
	}
	this[this.tail] = value;
	this.length++;
	return true;
};

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (this.length === 0) {
		return false;
	}	
	this[this.head] = null;
	if (this.head === this.tail) {
		this.head = -1;
		this.tail = -1;
	} else {
		if (this.head === this.maxSize -1) {
      this.head = 0;
		} else {
			this.head++;
		}
	}
	this.length--
  return true;
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
	if (this.head === -1) {
		return -1;
	}
	return this[this.head];
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
	if (this.tail === -1) {
		return -1;
	}
	return this[this.tail]
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
	if (this.length === 0) {
		return true;
	}
	return false;
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
	if (this.length === this.maxSize) {
		return true;
	}
	return false;
};
