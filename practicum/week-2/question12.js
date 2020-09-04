/*
The Fibonacci numbers, denoted as F(n) is a sequence such that
each number is the sum of the two preceding ones.
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
    var x = 1;
    var y = 0;
    var sum;
    for (var i = 0; i < n; i++) {
      sum = x + y;
      x = y;
      y = sum;
    }
    return y;
};
