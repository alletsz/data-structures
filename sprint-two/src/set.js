var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {

  this.storage.push(item);
};

setPrototype.contains = function(item) {
  var currentSet = this.storage;
  var containedItem = false;
  for (var i = 0; i < currentSet.length; i++) {
    if (currentSet[i] === item) {
      containedItem = true;
      return containedItem;
    } 
  }
  return containedItem;
};

setPrototype.remove = function(item) {

  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      this.storage.splice(i, 1);
    }
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
