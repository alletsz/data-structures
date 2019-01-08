var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.head] = value;
	this.head++;

}
// enqueue(string) - Add a string to the back of the queue
// dequeue() - Remove and return the string at the front of the queue
Queue.prototype.dequeue = function() {
	if (this.head > this.tail) {
		var holder = this.storage[this.tail];
		delete this.storage[this.tail];
		this.tail++;
	}
	return holder;
}
// size() - Return the number of items in the queue
Queue.prototype.size = function() {
	return this.head - this.tail;
}

