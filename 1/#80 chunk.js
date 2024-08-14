// https://leetcode.com/problems/chunk-array/

var chunk = function (arr, size) {
  let ar = [];
  for (let i = 0; i < arr.length; i += size) {
    ar.push(arr.slice(i, i + size));
  }
  return ar;
};
