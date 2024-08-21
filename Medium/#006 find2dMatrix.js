// https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/

var findMatrix = function (nums) {
  let res = [];
  while (nums.length) {
    let arr = [];
    let duplicates = [];
    nums.forEach((n, i) => {
      if (nums.indexOf(n) === i) arr.push(n);
      else duplicates.push(n);
    });
    res.push(arr);
    nums = duplicates;
  }
  return res;
};
