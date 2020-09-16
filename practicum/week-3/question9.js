/*
Given an array of integers A,
a move consists of choosing any A[i],
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/

var minMoves = function(A) {
  var arr = A.slice().sort();
  var count = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    while (arr[i + 1] <= arr[i]) {
      arr[i + 1] += 1;
      count++;
    }
  }
  return count;
};
