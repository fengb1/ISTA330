/*
There are n soldiers standing in a line.
Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers
under the following rules:

1. Choose 3 soldiers with index (i, j, k) with ratings (rating[i], rating[j], rating[k]).
2. A team is valid if:  (rating[i] < rating[j] < rating[k]) where (0 <= i < j < k < n).

Return the number of teams you can form given the conditions.
(soldiers can be part of multiple teams).


 Example:
         input: [2,5,3,4,1]
         output: 1
         We can only form one team given the
         conditions: (2,3,4)
*/

var howManyTeams = function(input) {
   for (var i = 1; i < input.length - 1; i++) {
     if (!(input[i - 1] < input[i] && input[i] < input[i + 1])) {
       input.splice(i, 1);
     }
   }
   if (input.length < 3) {
     return 0;
   }
   else {
     return Math.floor(input.length / 3);
   }
};
