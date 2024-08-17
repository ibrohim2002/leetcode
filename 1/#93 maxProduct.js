// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

var maxProduct = function (nums) {
  return (nums.sort((a, b) => b - a)[0] - 1) * (nums[1] - 1);
};
