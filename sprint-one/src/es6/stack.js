class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, counter) {
  	this.storage = {};
  	this.counter = 0;
  }

// push(string) - Add a string to the top of the stack
  push(value) {
  	this.storage[this.counter] = value; 
  	this.counter++;
  }
// pop() - Remove and return the string on the top of the stack
  pop() {
  	if (this.counter > 0) {
  	  delete this.storage[this.counter];
  	  this.counter--;
  	}
  	return this.storage[this.counter];
  }
// size() - Return the number of items on the stack
  size () {
  	return this.counter;
  }
}

// ES6 instantiation: declare classes with the keyword class
// Do:
// Work within the src/es6/ folder
// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor
// Explicitly declare a class method named constructor
// Declare all other class methods within the class declaration
// Don't:
// Declare the instance explicitly
// Return the instance explicitly
// Add class methods to the class prototype directly

// Class House{
//     constructor(color){
//         this.color = color;
//         this.door = 'open';
//     }
//     openDoor() { this.door = 'open' };
//     closeDoor() { this.door = 'close' }
// }

// var red_house = new House('red');