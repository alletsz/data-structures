

// Instantiate a new graph
var Graph = function() {

  this.obj = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  
  this.obj[node] = {edges: {}};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  if (this.obj.hasOwnProperty(node)) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
//first check if node exists
//remove the connecting edges
//if it exists, remove it


  if (this.contains(node)) {
    var keys = Object.keys(this.obj[node].edges);
    for (var i = 0; i < keys.length; i++) {
      delete this.obj[keys[i]].edges[node];
    }
    delete this.obj[node];
  } 
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.obj[fromNode].edges[toNode] && this.obj[toNode].edges[fromNode]) {
  //console.log(this.obj[fromNode].edges[toNode]) evaluates to the values of edges
    return true;  
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // (node 1, node 2)

// every time we add new node , we connect it to the from Node 
//push fromNode into toNode's edges array
//push toNode into fromNode's edges array

  this.obj[fromNode].edges[toNode] = true; // node 1 = {edges: {2: true}};
  this.obj[toNode].edges[fromNode] = true; // node 1 = {edges: [1, 2]}

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  if (this.obj[fromNode] && this.obj[toNode]) { //if both nodes exist
    if (this.obj[fromNode].edges[toNode]) { //if currNode.edges === toNode ; if 1.edges = 2
      this.obj[fromNode].edges[toNode] = false; // node 1 = {edges: [1]}
      this.obj[toNode].edges[fromNode] = false;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodes = Object.keys(this.obj);
  for (var i = 0; i < nodes.length; i++) {
    cb (nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


