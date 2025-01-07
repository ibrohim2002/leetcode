var sortArrayByParity = function (nums) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) arr.push(nums[i]);
    else arr.unshift(nums[i]);
  }
  return arr;
};
