var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.head = 0;
  obj.tail = 0;

  return obj;
};

var queueMethods = {};
// enqueue(string) - Add a string to the back of the queue
queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
}

// dequeue() - Remove and return the string at the front of the queue
queueMethods.dequeue = function(value) {
  if (this.tail > this.head) {
  	var holder = this.storage[this.head];
  	delete this.storage[this.head];
    this.head++;
  }
  return holder;
}
// size() - Return the number of items in the queue
queueMethods.size = function() {
  return this.tail - this.head;
};


