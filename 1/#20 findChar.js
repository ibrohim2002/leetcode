// https://leetcode.com/problems/find-words-containing-character/
var findWordsContaining = function (words, x) {
  let res = [];
  words.forEach((word, i) => word.includes(x) && res.push(i));
  return res;
};
