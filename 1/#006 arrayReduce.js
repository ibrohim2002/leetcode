// https://leetcode.com/problems/array-reduce-transformation/submissions/1329106039/

var reduce = function (nums, fn, init) {
  let res = init;
  nums.forEach((num) => {
    res = fn(res, num);
  });
  return res;
};
