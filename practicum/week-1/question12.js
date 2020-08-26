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
    var temp = input[0];
    var count = 0;
    var sub = false;
    var position;
    for (var i = 1; i < input.length; i++) {
      if (temp == input[i] && !sub) {
        count++;
      }
      else if (temp == input[i] && sub) {
        position = i;
        break;
      }
      else {
        count--;
        sub = true;
      }
      if (count == 0) {
        position = i;
        break;
      }
    }
    if (position > 0) {
      result++;
      input = input.slice(position);
    }
    else {
      input = input.slice(position);
    }
  }

  return result - 1;
};
