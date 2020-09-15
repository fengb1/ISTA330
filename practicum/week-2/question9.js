/*
Given an integer n,
put each number from 1 to n
into groups based on the sum of its digits.

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    var arr = new Array();
    for (var i = 0; i < n; i++) {
      var sum = 0;
      var temp = i + 1;
      while (temp != 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
      }
      if (arr[sum] == undefined) {
        arr[sum] = [];
        arr[sum].push(i + 1);
      }
      else {
        arr[sum].push(i + 1);
      }
    }
    var count = 0;
    var length = arr[2].length;
    console.log(arr);
    for (var i = 1; i < arr.length; i++) {
      if (arr[i].length == length) {
        count++;
      }
    }

    return count;
};
