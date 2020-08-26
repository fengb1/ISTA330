/*
Given an integer n, return difference between the maximum and the minimum of its digits.

Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
  var num = n.toString();
  var arr = [];
  for (var i = 0; i < num.length; i++) {
    arr[i] = parseInt(num.charAt(i));
  }

  return Math.max(...arr) - Math.min(...arr);
};
