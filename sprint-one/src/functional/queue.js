var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  var tail = 0;


  // Implement the methods below

  someInstance.enqueue = function(value) {
    // enqueue(string) - Add a string to the back of the queue
    storage[head] = value;
    head++;
  };

  someInstance.dequeue = function() {
    // dequeue() - Remove and return the string at the front of the queue
     if (head > tail) {
      var holder = storage[tail]
      delete storage[tail];
      tail++;
    }
     return holder;
  };

  someInstance.size = function() {
    // size() - Return the number of items in the queue
    return head-tail;
  };

  return someInstance;
};





// size() - Return the number of items in the queue