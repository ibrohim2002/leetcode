// https://leetcode.com/problems/find-the-integer-added-to-array-i/

var addedInteger = function(nums1, nums2) {
    return Math.max(...nums2)-Math.max(...nums1)
};