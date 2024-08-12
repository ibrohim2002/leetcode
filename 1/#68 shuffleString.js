// https://leetcode.com/problems/shuffle-string/submissions/1352635932/

var restoreString = function (s, indices) {
  let all = indices.map((num, i) => [num, s[i]]);
  all.sort((a, b) => a[0] - b[0]);
  return all.map((a) => a[1]).join("");
};
