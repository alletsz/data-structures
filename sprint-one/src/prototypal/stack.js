var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.keyCount = 0;

  return obj;
};

var stackMethods = {};
  // push(string) - Add a string to the top of the stack
  stackMethods.push = function (value) {
  	this.storage[this.keyCount] = value;
  	this.keyCount++;
  }
  // pop() - Remove and return the string on the top of the stack
  stackMethods.pop = function() {
  	if (this.keyCount > 0) {
      this.keyCount--;
  	  var holder = this.storage[this.keyCount];
  	  delete this.storage[this.keyCount];
  	}

  	return holder;
  }
  // size() - Return the number of items on the stack
  stackMethods.size = function () {
    return this.keyCount;
  }


