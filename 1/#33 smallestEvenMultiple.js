// https://leetcode.com/problems/smallest-even-multiple/
var smallestEvenMultiple = function (n) {
  if (n % 2) return 2 * n;
  else return n;
};
