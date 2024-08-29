// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

var sumZero = function (n) {
  let arr = n % 2 ? [0] : [];
  for (let i = 1; i <= n / 2; i++) {
    arr.push(-i, i);
  }
  return arr;
};
