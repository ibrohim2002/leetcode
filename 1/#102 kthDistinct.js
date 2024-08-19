// https://leetcode.com/problems/kth-distinct-string-in-an-array/

var kthDistinct = function (arr, k) {
  let ar = [];
  let duplicates = [];
  arr.forEach((a) => {
    ar.includes(a) ? duplicates.push(a) : ar.push(a);
  });
  let res = "";
  res = ar.filter((a) => {
    return !duplicates.includes(a);
  })[k - 1];
  return res ? res : "";
};
