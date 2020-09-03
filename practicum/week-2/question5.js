/*
An array is monotonic if it is
either monotone increasing
or monotone decreasing.

An array A is monotone increasing
if for all i <= j, A[i] <= A[j].
An array A is monotone decreasing
if for all i <= j, A[i] >= A[j].

For a given array, input,
return true if and only if the input array is monotonic.

Example:
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    var increasing = true;
    var decreasing = true;
    for (var i = 1; i < input.length - 1; i++) {
      if (!(input[i - 1] <= input[i] && input[i] <= input[i + 1])) {
        increasing = false;
        break;
      }
    }
    for (var i = 1; i < input.length - 1; i++) {
      if (!(input[i - 1] >= input[i] && input[i] >= input[i + 1])) {
        decreasing = false;
        break;
      }
    }
    if (increasing || decreasing) {
      return true;
    }
    else {
      return false;
    }
};
