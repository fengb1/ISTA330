/*
Given a string, determine if it is a palindrome,
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question,
we define empty string as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {
  var regex = /^[a-z0-9 ?]+$/i;
  if (s.length == 0) {
    return true;
  }
  else if (s.match(regex)) {
    return true;
  }
  else {
    return false;
  }
};
