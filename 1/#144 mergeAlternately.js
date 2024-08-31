// https://leetcode.com/problems/merge-strings-alternately/

var mergeAlternately = function (word1, word2) {
  let length = Math.min(word1.length, word2.length);
  let res = "";
  for (let i = 0; i < length; i++) {
    res += word1[i] + word2[i];
  }
  return res + word1.slice(length) + word2.slice(length);
};
