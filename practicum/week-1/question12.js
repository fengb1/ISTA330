/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

A substring is balanced if it has ewual number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  var result = 0;
  while (input.length > 0) {
    var count = 0;
    var temp = input[0];
    var check = false;
    var sub = 0;
    for (var i = 0; i < input.length; i++) {
      if (temp == input[i] && !check) {
        count++;
      }
      else if (temp == input[i] && check) {
        sub = 0;
        break;
      }
      else {
        count--;
        check = true;
      }
      if (count == 0) {
        sub = i;
        break;
      }
    }
    if (sub > 0) {
      result++;
      input = input.slice(sub + 1);
    }
    else {
      input = input.slice(1);
    }
    sub = 0;
  }

  return result;
};
