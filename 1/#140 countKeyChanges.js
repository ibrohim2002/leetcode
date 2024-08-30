// https://leetcode.com/problems/number-of-changing-keys/

var countKeyChanges = function (s) {
  let count = 0;
  s = s.toLowerCase();
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] != s[i]) count++;
  }
  return count;
};
