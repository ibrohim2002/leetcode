// https://leetcode.com/problems/find-the-difference-of-two-arrays/

var findDifference = function (nums1, nums2) {
  nums1 = new Set(nums1);
  nums2 = new Set(nums2);
  let arr = [[], []];
  for (let num of nums1) {
    if (!nums2.has(num)) {
      arr[0].push(num);
    }
  }
  for (let num of nums2) {
    if (!nums1.has(num)) {
      arr[1].push(num);
    }
  }
  return arr;
};
