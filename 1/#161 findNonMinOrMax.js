// https://leetcode.com/problems/neither-minimum-nor-maximum/

var findNonMinOrMax = function (nums) {
  if (nums.length <= 2) return -1;
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== max && nums[i] !== min) return nums[i];
  }
};
