/*
Given a set of distinct integers, input,
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.

Example:
 input: [1,2,3]
 output: [
  [],
  [1],
  [2],
  [3],
  [1,3],
  [2,3],
  [1,2],
  [1,2,3]
]
*/

var powerSet = function(input) {
  var subset = [];
  var result = [];
  for (var i = 0; i < Math.pow(2, input.length); i++) {
    for (var j = 0; j < input.length; j++) {
      console.log(i & (1<<j));
      if ((i & (1<<j)) > 0) {
        subset.push(input[j]);
      }
    }
    result.push(subset);
    subset = [];
  }
  return result;
};
