/*
Given an integer n,
put each number from 1 to n
into groups based on the sum of its digits.

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    var arr = new Array(9);
    for (var i = 1; i < n + 1; i++) {
      if (arr[(i % 10) - 1] == undefined && i != 10) {
        arr[(i % 10) - 1] = [];
        arr[(i % 10) - 1].push(i);
      }
      else if (i == 10) {
        arr[0].push(i);
      }
      else {
        arr[i % 10].push(i);
      }
    }
    var count = 0;
    var length = arr[0].length;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length == length) {
        count++;
      }
    }
    return count;
};
