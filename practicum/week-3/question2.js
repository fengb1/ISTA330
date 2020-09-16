
/*
Given an array of integers, 1 ≤ input[i] ≤ n (n = size of array),
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]

          */

 var findDuplicates = function(input) {
     var arr = input.slice().sort();
     var result = [];
     for (var i = 0; i < arr.length - 1; i++) {
       if (arr[i] == arr[i + 1]) {
         result.push(arr[i]);
       }
     }
     return result;
 };
