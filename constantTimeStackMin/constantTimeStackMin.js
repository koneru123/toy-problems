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
  this.storagelength = 0;
  this.storage1length = 0;

// add an item to the top of the stack
  this.push = function(value) {
    this.storage[this.storagelength] = value;
    this.storagelength++;
    if(this.storage1length === 0) {
      this.storage1[this.storage1length] = value;
      this.storage1length++;
    } else if(value <= this.storage1[this.storage1length-1]) {
      this.storage1[this.storage1length] = value;
      this.storage1length++;
    }

  };

// remove an item from the top of the stack
  this.pop = function() {
    if(this.storagelength > 0) {
      var poppedElement = this.storage[this.storagelength - 1];
      delete this.storage[this.storagelength-1];
      this.storagelength--;
      if(poppedElement === this.storage1[this.storage1length - 1]) {
        delete this.storage1[this.storage1length - 1];
        this.storage1length--
      }
    }
  };

// return the number of items in the stack
  this.size = function() {
    return this.storagelength;
  };

// return the minimum value in the stack
  this.min = function() {
    return this.storage1[this.storage1length-1];
  };

};

var example = new Stack()
example.push(200);
console.log(example.min())// 200
example.push(100);
console.log(example.min())// 100
example.pop();
console.log(example.min())// 200
example.push(50);
example.push(50);
console.log(example.min())// 50
example.pop();
console.log(example.min())// 50
