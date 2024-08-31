// https://leetcode.com/problems/remove-trailing-zeros-from-a-string/submissions/1374701065/

var removeTrailingZeros = function (num) {
  return num.replace(/0+$/, "");
};
