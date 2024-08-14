// https://leetcode.com/problems/sorting-the-sentence/
//
var sortSentence = function (s) {
  return s
    .split(" ")
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .map((a) => a.slice(0, a.length - 1))
    .join(" ");
};


