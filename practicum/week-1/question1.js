/*
Given an array of numbers, return the running sum of the array.
Running sum of a cell in the array is the sum of the cells up to that cell.
For example given the input array [5, 6, 1], the running sum is
[5, 5+6, 5+6+1]
*/

var runningSum = function(input) {
   var count;
   var sum = 0;
   var result = [];
   for (var i = 0; i < input.length; i++) {
     count = i;
     while (count > -1) {
       sum += input[count];
       count--;
     }
     result[i] = sum;
     sum = 0
   }

   return result;
};
