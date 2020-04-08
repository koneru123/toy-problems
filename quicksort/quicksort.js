/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

/* I: array of numbers
   0: sorted array of numbers
Edgecases:
1. Array can be empty
2. It can have negative numbers
3. It can have repetitive numbers */

var quicksort = function(array) {
  var leftArr = [];
  var rightArr = [];
  var newArray = [];
  var pivot = array[array.length - 1]
  if(array.length === 0) {
    return [];
  }
  for(let i = 0; i < array.length-1; i++) {
    if(array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }
  // recursive implementation
  // uses the rest operator
  newArray = newArray.concat(...quicksort(leftArr), pivot , ...quicksort(rightArr));
  return newArray;
};

var arr = [50, 23, 9, 18, 61, 32];
var arr1 = [];
var arr2 = [50, 23, 9, 18, -61, 32];
var arr3 = [50, 50, 9, 18, -61, 32, 32];
console.log(quicksort(arr3));
