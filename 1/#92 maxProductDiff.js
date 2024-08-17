// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/submissions/1358924043/

var maxProductDifference = function (nums) {
  nums.sort((a, b) => b - a);
  let l = nums.length;
  return nums[0] * nums[1] - nums[l - 1] * nums[l - 2];
};
