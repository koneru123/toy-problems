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
    while(start < end) {
        let middleValue = Math.floor((start+end)/2); 
        if(target === array[middleValue]) {
            return middleValue;
        }
        else if(target < array[middleValue]) { 
            end = middleValue;
        }
        else if(target > array[middleValue]){ 
            start = middleValue; 
        } else {
            return null;
        }
    }
};

//console.log(binarySearch([1, 2, 3, 4, 5], 4));
console.log(binarySearch([1, 2, 3, 4, 5], 8));
