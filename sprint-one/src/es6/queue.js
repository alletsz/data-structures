class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, head, tail) {
  	this.storage = {};
  	this.head = 0;
  	this.tail = 0;
  }
//  enqueue(string) - Add a string to the back of the queue
  enqueue(value) {
	this.storage[this.tail] = value;
	this.tail++;
}
// dequeue() - Remove and return the string at the front of the queue
  dequeue() {
	if (this.tail > this.head) {
	  var firstItem = this.storage[this.head]
	  delete this.storage[this.head];
	  this.head++;
	}
	return firstItem;
}
// size() - Return the number of items in the queue
  size() {
	return this.tail - this.head;
  }

}
