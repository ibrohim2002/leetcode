// https://leetcode.com/problems/minimize-string-length/

var minimizedStringLength = function (s) {
  return s.split("").filter((l, i) => s.indexOf(l) == i).length;
};
