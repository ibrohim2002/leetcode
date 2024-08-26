// https://leetcode.com/problems/length-of-last-word/submissions/1368450290/

var lengthOfLastWord = function (s) {
  let str = s.trim().split(" ");
  return str[str.length - 1].length;
};
