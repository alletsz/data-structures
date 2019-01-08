var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

// enqueue(string) - Add a string to the back of the queue
  queueMethods.enqueue = function(value) {
  	this.storage[this.tail] = value;
  	this.tail++;
  }

  // dequeue() - Remove and return the string at the front of the queue
  queueMethods.dequeue = function() {
  	if (this.tail > this.head) {
  	  var holder = this.storage[this.head];
  	  delete this.storage[this.head];
  	  this.head++;
  	}
  	return holder;
  }	

  
  // size() - Return the number of items in the queue
  queueMethods.size = function () {
  	return this.tail - this.head;
  };


// Do:
// Work within the src/functional-shared/ folder
// Create an object that holds the methods that will be shared by all instances of the class
// Use the keyword this in your methods
// Use _.extend to copy the methods onto the instance

// Don't:
// Use the keyword new or prototype chains
// Example: functional instantiation example
