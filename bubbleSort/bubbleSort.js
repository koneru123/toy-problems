/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.

// Basic implementation
// I: array, consider an array of numbers
// O: return the sorted input array
// edgecases,
// 1. what if there are two same numbers in the array?
// 2. what if array length is zero
// 3. what if we have same elements in the array ?
// 4. what incase if the array has negative number?
// Time complexity:- O(n^2)

var bubbleSort = function(array) {
  if(array.length === 0) {
    return [];
  }
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(array[j] > array[j+1]) {
        temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}

//var array = [2, 1, 3];
//var array1 = [20,30,40,90,50,60,70,80,100,110];
//var array2 = [];
//var array3 = [2, 2, 1, 1, 3, 3, 0, 0];
var array4 = [45, 101, 123, 453, 543, 3324, -10, 12, 33, 45, 123, 555422, 33];;
console.log(bubbleSort(array4));
