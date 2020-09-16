/*
Given an array with n objects colored red, white or blue,
sort them in-place(refer to https://en.wikipedia.org/wiki/In-place_algorithm) so that objects of the same color are adjacent,
with the colors in the order red, white and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not supposed to use the library's sort function for this question.

Example:
input:  [2,0,2,1,1,0]
output: [0,0,1,1,2,2]
*/

var sortColors = function(input) {
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length - 1; j++) {
      if (input[j] > input[j + 1]) {
        var temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  return input;
};
