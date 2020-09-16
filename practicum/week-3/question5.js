/*
Given an array input of n integers
 where n > 1,
 return an array output such that
 output[i] is equal to the product of all the elements of input except input[i].

Example:
input: [1,2,3,4]
output: [24,12,8,6]
*/

var productOfOthers = function(input) {
  var result = [];
  var product = 1;
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      if (j != i) {
        product *= input[j];
      }
    }
    result.push(product);
    product = 1;
  }
  return result;
};
