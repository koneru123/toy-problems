/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
    let finalArr = [''];
    for(let i = 0; i < str.length; i++) {
        finalArr.push(str[i]);   
        for(j = i+1; j < str.length; j++) {
            finalArr.push(str[i] + str[j]);
        }
        powerSet(str.slice(i+1));
    }
    finalArr.push(str);
    return finalArr;
};

//console.log(powerSet('abc'));
console.log(powerSet('jump'));