/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', 'RRRRR', 'RRRRP'];
* rockPaperScissors(3); // => ['RRR', 'RRP', 'RRS'];
*
*/

/* var generateWord = function(str) {
  let str1 = str;
  let arr1 = str.split('');

  //for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[arr1.length - 1]);
    if(arr1[arr1.length - 1] !== 'P') {
      arr1[arr1.length - 1] === 'P';
    }
  //}
  str1 = arr1.join('');
  return str1;
} */

//console.log(replaceLastWord('RRS'));

var rockPaperScissors = function(n) {
  let resultArr = [];
  let charactersArr = ['R', 'P', 'S'];

  var rockPaperScissorsCombinations = function(str, n) {
    //console.log(arguments);
    //console.log(n);
    if(n === 0) {
      resultArr.push(str);
      return;
    }
    for(let i = 0; i < charactersArr.length; i++) {
      rockPaperScissorsCombinations(str + charactersArr[i], n-1);
    }
  };

  rockPaperScissorsCombinations('', n);
  return resultArr;
}

console.log(rockPaperScissors(3));



