var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  

  //every child is its own tree
  //create a new tree
  // add that child tree to root
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
//return boolean reflecting if target is found in target node or any other descendant node

//check value
//if no => check children
//use recursion on children
//base case is if target is found or there is no more children 
  var found = false; 
  var traverse = function (node) {
    if (node.value === target) {
      found = true;
    } else if (node.children.length === 0) {
      return;
    } else {
      for (var i = 0; i < node.children.length; i++) {
        traverse(node.children[i]);
      }
    }
  };
  traverse(this);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
