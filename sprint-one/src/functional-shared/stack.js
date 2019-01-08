var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.counter = 0;
  _.extend(obj, stackMethods);

return obj;
};

var stackMethods = {};
  // push(string) - Add a string to the top of the stack
  stackMethods.push = function(value) {
    this.storage[this.counter] = value;
  	this.counter++;
  }
  // pop() - Remove and return the string on the top of the stack
  stackMethods.pop = function() {
  	if (this.counter > 0) {
  	  delete this.storage[this.counter];
  	  this.counter--;
  	}
  	return this.storage[this.counter];
  }
  // size() - Return the number of items on the stack
  stackMethods.size = function() {
  	return this.counter;
  }


// Do:
// Work within the src/functional-shared/ folder
// Create an object that holds the methods that will be shared by all instances of the class
// Use the keyword this in your methods
// Use _.extend to copy the methods onto the instance

// Don't:
// Use the keyword new or prototype chains
// Example: functional instantiation example