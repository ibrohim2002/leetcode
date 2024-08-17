// https://leetcode.com/problems/maximum-odd-binary-number/

var maximumOddBinaryNumber = function (s) {
  let srt = s.split("").sort((a, b) => b - a);
  return srt.join("").slice(1) + "1";
};
