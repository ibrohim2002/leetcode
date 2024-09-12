// https://leetcode.com/problems/shuffle-the-array/

var shuffle = function (nums, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(nums[i], nums[n + i]);
  }
  return res;
};
