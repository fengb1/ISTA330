/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array.
Example:
input: [1, 2, 2, 3, 4, 7, 9]
output: 3
*/

var median = function(input) {
  var length = input.length;
  if (length % 2 == 1) {
    return input[length / 2 - 0.5];
  }
  else {
    return (input[length / 2] + input[length / 2 - 1]) / 2;
  }
};
