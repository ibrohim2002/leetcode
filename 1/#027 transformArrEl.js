// https://leetcode.com/problems/apply-transform-over-each-element-in-array/

var map = function (arr, fn) {
  let res = [];
  arr.forEach((n, i) => res.push(fn(n, i)));
  return res;
};
