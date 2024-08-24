// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function (nums) {
  return nums.length != [...new Set(nums)].length;
};
