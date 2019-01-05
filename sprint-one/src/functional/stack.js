var Stack = function() {
 var someInstance = {};

 // Use an object with numeric keys to store values
 var storage = {};
 var keyCount = 0;

 // Implement the methods below
 someInstance.push = function(value) {
  // push(string) - Add a string to the top of the stack
   storage[keyCount] = value;
   keyCount++;
 };

 someInstance.pop = function() {
  // pop() - Remove and return the string on the top of the stack
   if( keyCount > 0 ){
     delete storage[keyCount];
     keyCount--;
   }
   return storage[keyCount];

 };

 someInstance.size = function() {
  // size() - Return the number of items on the stack
   return keyCount;
 };

 return someInstance;
};


