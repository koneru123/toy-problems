/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) { 
    let start = 0; 
    let end = array.length - 1; 
    var currentIndex;
    var currentElement;

    while(start <= end) {
        currentIndex = Math.floor((start+end)/2); 
        currentElement = array[currentIndex];

        if(currentElement < target) { 
            start = currentIndex + 1;
        } else if(currentElement > target){ 
            end = currentIndex - 1; 
        } else {
            return currentIndex;
        }
    }
    return null;
};

console.log(binarySearch([1, 2, 3, 4, 5], 4));
//console.log(binarySearch([1, 2, 3, 4, 5], 8));
