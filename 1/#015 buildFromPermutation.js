// https://leetcode.com/problems/build-array-from-permutation/

var buildArray = function (nums) {
  let res = nums.map((num) => {
    return nums[num];
  });
  return res;
};
