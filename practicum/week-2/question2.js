
/*
Given an integer array, input,
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
     var result = [];
     var temp = 0;
     for (var i = 0; i < input.length; i++) {
       result.push(input[i]);
       temp = input[i];
       for (var j = i + 1; j < input.length; j++) {
         temp += input[j];
         result.push(temp);
       }
     }

     return Math.max(...result);
 };
