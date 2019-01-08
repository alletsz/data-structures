var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  //create a new node
  // adjust the tail node next reference to refer to the new node
  // adjust the tail node to the new node
    var newNode = Node(value);
    var currNode = list.tail;
    
    if (list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      var previousNode = list.tail;
      list.tail.next = newNode; 
      list.tail = newNode;
    } 

  };

  list.removeHead = function() {
    // move head to the next node 
    //reassign head to next node
    // return removed value
    var currHead = list.head.value; 
    list.head = list.head.next;
    return currHead;

  };

  list.contains = function(target) {
  //return a booloean if target is in linked list
    
    var results;

    var traverse = function (node) {
      if (node.value === target) {
        results = true;
      } else if (node.next === null) {
        results = false;
      } else {
        traverse(node.next);
      }
      //   traverse(node.next);
      // }
    
    };

    traverse(list.head);
    return results;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
