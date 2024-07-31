// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {
  let st = "";
  for (let i = 0; i < strs[0].length; i++) {
    if (
      strs.every((value) => {
        return strs[0][i] == value[i];
      })
    ) {
      st += strs[0][i];
    } else break;
  }
  return st;
};