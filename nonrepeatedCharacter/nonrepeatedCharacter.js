/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

/* I: string
O: First non-repeated character
edgecases:-
1. string can be empty
2. if no repeated character are found return 'no match found' string*/

/* 1. Create an empty object
2. If given ABA
3. try to return the object as {A: 2, B: 1}
4. Loop through the object and check for length who ever value is less, return the value */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  let set = new Set(string.split(''));
  let newArr = Array.from(set);
  //console.log(newArr);
  if(string.length === 0) {
    return '';
  }
  let resultObj = {};
  for(let i = 0; i < string.length; i++) {
    if(!resultObj.hasOwnProperty(string[i])) {
      resultObj[string[i]] = 1;
    } else {
      resultObj[string[i]] += 1;
    }
  }

  //console.log(resultObj);
  //let nonRepeatingChar;
  for(let j = 0; j < newArr.length; j++) {
    if(resultObj[newArr[j+1]] < resultObj[newArr[j]]) {
      var nonRepeatingChar = newArr[j+1];
      return nonRepeatingChar;
    }
  }
  return '';
};

const string = 'ABA';
const string1 = 'AACBDB';
const string2 = 'AABBCC';
const string3 = '';
const string4 = 'AAAACX'
console.log(firstNonRepeatedCharacter(string4));
