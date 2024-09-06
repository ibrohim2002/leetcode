// https://leetcode.com/problems/is-object-empty/

var isEmpty = function (obj) {
  if (Object.keys(obj).length) return false;
  return true;
};
