var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value) {
	this.storage[this.counter] = value;
	this.counter++;
}
// push(string) - Add a string to the top of the stack
// pop() - Remove and return the string on the top of the stack
Stack.prototype.pop = function() {
	if (this.counter > 0) {
	  this.counter--;
	  var holder = this.storage[this.counter];
	  delete this.storage[this.counter] 		
	}
	return holder;
}
// size() - Return the number of items on the stack
Stack.prototype.size = function () {
	return this.counter;
}

// Do:
// Work within the src/pseudoclassical/ folder
// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor

// Don't:
// Declare the instance explicitly
// Return the instance explicitly

var column = new Stack();