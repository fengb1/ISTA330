/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively.
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited.
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
*/

var isCrossing = function(s) {
  var record = [0, 0];
  for (var i = 0; i < s.length; i++) {
    if (s[i] == "N") {
      record[0] += 1;
    }
    else if (s[i] == "S") {
      record[0] -= 1;
    }
    else if (s[i] == "E") {
      record[1] += 1;
    }
    else if (s[i] == "W") {
      record[1] -= 1;
    }
    if (record[0] == 0 && record[1] == 0) {
      return true;
    }
  }
  return false;
};
