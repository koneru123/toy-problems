/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

// input is an array
// output is the number of times unique even numbers appeared in the array
// if no even number return null
// consider case when given array could be empty
// consider case when given array has some other data types

var evenOccurrence = function(arr) {
  var obj = {};
  var endResult = null;

  for(let i = 0; i < arr.length; i++) {
    if(!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  //console.log(obj);
  //This doesnt work because object arranges numbers first and strings later in chronological order
  /* for(let [key, value] of Object.entries(obj)) {
    if(value % 2 === 0) {
      endResult = key;
      return endResult;
    }
  } */
  for(var j = 0; j < arr.length; j++) {
    if(obj[arr[j]] % 2 === 0) {
      endresult = arr[j];
      return endresult;
    }
  }
  return endResult;
};

var onlyEven = [1, 7, 2, 4, 5, 6, 8, 9, 6, 4]; // 4
var onlyEven1 = ['cat', 'dog', 'dig', 'cat']; // cat
var array = ['rob', 'victor', 'fred', 'jess', 'rob', 'rob']; // null
var array1 = ['meow', 1, 1, 'meow']; // meow
console.log(evenOccurrence(array1));

/* onlyEven Obj = {
  1: 1,
  7: 1,
  2: 1,
  4: 2,
  5: 1,
  6: 2,
  8: 1,
  9: 1,
},

onlyEven1 Obj = {
  'cat' : 2,
  'dog' : 1,
  'dig' : 1
}

array obj = {
  'rob' : 3,
  'victor' : 1,
  'fred' : 1,
  'jess' : 1
}

array1 obj = {
  'meow' : 2,
  1 : 2
} */