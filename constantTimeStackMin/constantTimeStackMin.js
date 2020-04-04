/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
 var Stack = function() {

  this.storage = {};
  this.storage1 = {};
  this.length = 0;

// add an item to the top of the stack
  this.push = function(value) {
    if(this.length === 0) {
      this.storage[this.length] = value;
      this.storage1[this.length] = value;
    } else if(value < this.storage1[this.length-1]) {
      this.storage1[this.length] = value;
    }
    this.length++;
  };

// remove an item from the top of the stack
  this.pop = function() {
    if(this.length > 0) {
      if(this.storage[this.length] === this.storage1[this.length]) {
        delete this.storage1[this.length - 1];
        delete this.storage1[this.length - 1];
        this.length--;
      }
    }
  };

// return the number of items in the stack
  this.size = function() {
    return this.length;
  };

// return the minimum value in the stack
  this.min = function() {
    return this.storage1[this.length-1];
  };

};

var example = new Stack()
example.push(4)
example.push(3)
example.push(2)
example.push(5)
example.pop(2)
//example.size()
console.log(example.min()) // 2
example.push(3)
example.push(2)
example.push(1)
console.log(example.min()) // 1
