// https://leetcode.com/problems/find-greatest-common-divisor-of-array/submissions/1371274868/

var findGCD = function (nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  for (let i = min; i > 1; i--) {
    if (min % i == 0 && max % i == 0) return i;
  }
  return 1;
};
