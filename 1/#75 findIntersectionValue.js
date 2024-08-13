// https://leetcode.com/problems/find-common-elements-between-two-arrays/

var findIntersectionValues = function (nums1, nums2) {
  let length1 = nums1.filter((num) => nums2.includes(num)).length;
  let length2 = nums2.filter((num) => nums1.includes(num)).length;
  return [length1, length2];
};
