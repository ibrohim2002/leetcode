// https://leetcode.com/problems/remove-element/description/
var removeElement = function (nums, val) {
  const set = nums.filter((vl) => vl !== val);
  let i = 0;
  set.forEach((num) => {
    nums[i] = num;
    i++;
  });
  return i;
};
