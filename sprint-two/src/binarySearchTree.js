var BinarySearchTree = function(value) {


  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.insert = function (value) {
// A .insert() method, which accepts a value and places it in the tree in the correct position.

// add new node instructions
//recursive call to check values of children if nodes already exist
//if this.left !== null, keep checking
//else, add node

  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
    
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
  

};


treeMethods.contains = function (value) {
// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (this.left === null) {
      return false;     
    } else {
      return this.left.contains(value);
    }
  } else {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }

};

treeMethods.depthFirstLog = function (callback) {

//A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
  // if (this.left === null && this.right === null) {
  //   return callback(this.value);
  // }
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }  

  if (this.right) {
    this.right.depthFirstLog(callback);
  } 
 
};


/*
 * Complexity: What is the time complexity of the above functions?
c */
