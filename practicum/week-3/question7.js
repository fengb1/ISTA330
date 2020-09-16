/*
Given a m x n matrix filled with non-negative numbers,
find a path from top left to bottom right
which minimizes the sum of all numbers along its path. Return the sum.

Note: You can only move either down or right at any point in time.

Example:
input: [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
output: 7
        Because the path 1→3→1→1→1 minimizes the sum.

*/

var minPath = function(M) {
  var m = M.length;
  var n = M[0].length;
  var arr = [];
  for (var i = 0; i < m; i++) {
    arr.push([]);
    for (var j = 0; j < n; j++) {
      arr[i][j] = M[0][0];
    }
  }
  for (var i = 0; i < m - 1; i++) {
    arr[i + 1][0] = arr[i][0] + M[i + 1][0];
  }
  for (var i = 0; i < n - 1; i++) {
    arr[0][i + 1] = arr[0][i] + M[0][i + 1];
  }
  for (var i = 0; i < m - 1; i++) {
    for (var j = 0; j < n - 1; j++) {
      arr[i + 1][j + 1]  = Math.min(arr[i][j + 1], arr[i + 1][j]) + M[i + 1][j + 1];
    }
  }
  return arr[m - 1][n - 1];
};
