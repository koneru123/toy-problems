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

var rockPaperScissors = function(n) {

  let resultArr = [];
  let characters = ['R', 'P', 'S'];

  let rockPaperScissorsCombination = function(str, n) {
    if(n <= 0) {
      resultArr.push(str);
      return;
    }
    for(let i = 0; i < characters.length; i++) {
      rockPaperScissorsCombination(str + characters[i], n-1);
    }
    /* characters.forEach(element => {
      rockPaperScissorsCombination(str + element, n-1);
    }); */
  }

  rockPaperScissorsCombination('', n);

  return resultArr;
}

console.log(rockPaperScissors(2));



