/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

let allAnagrams = (string) => {
  // Your code here.
  let anagramArr = [];
  if(string.length === 1) {
    anagramArr.push(string);
    return anagramArr;
  }
  for(let i = 0; i < string.length; i++) {
    let firstStr = string[i];
    //console.log('firstStr',firstStr);
    let leftChar = string.substring(0, i) + string.substring(i + 1);
    //console.log('leftChar',leftChar);
    let anagramCombinations = allAnagrams(leftChar);
    //console.log('anagramCombinations', anagramCombinations);
    for(let j = 0; j < anagramCombinations.length; j++) {
      anagramArr.push(firstStr + anagramCombinations[j]);
    }
  }
  return anagramArr;
};

let combination = allAnagrams('abc');
console.log(combination); //[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]