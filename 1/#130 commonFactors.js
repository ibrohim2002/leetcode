// https://leetcode.com/problems/number-of-common-factors/

var commonFactors = function (a, b) {
  let sum = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      sum++;
    }
  }
  return sum;
};
