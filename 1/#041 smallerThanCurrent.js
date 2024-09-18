// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

var smallerNumbersThanCurrent = function (nums) {
  return nums.map((num) => {
    let counter = 0;
    nums.forEach((n) => {
      num > n && counter++;
    });
    return counter;
  });
};
