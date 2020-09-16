/*
Given an array input of 0s and 1s and an integer k,
return true if all ones(1s) are at least k places away from each other,
otherwise return false.

Example:
input: input = [1,0,0,0,1,0,0,1], k = 2
output: true
*/

var kStepAway = function(input, k) {
  var index = null;
  for (var i = 0; i < input.length; i++) {
    if (input[i] == 1 && index == null) {
      index = i;
    }
    else if (input[i] == 1 && index != null) {
      if (k >= i - index) {
        return false;
      }
      else {
        index = i;
      }
    }
  }
  return true;
};
