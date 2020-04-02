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
  let set1 = new Set(arr);
  let newArr = Array.from(set1);
  let counter = null;
  if(arr.length === 0) {
    return null;
  }
  //console.log(set);
  //console.log(newArr);
  for(let i = 0; i < newArr.length-1; i++) {
    if(newArr[i] % 2 === 0) {
      counter += 1;
    }
  }
  return counter;
};

var onlyEven = [1, 7, 2, 4, 5, 6, 8, 9, 6, 4];
console.log(evenOccurrence(onlyEven));