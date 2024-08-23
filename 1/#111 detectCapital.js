// https://leetcode.com/problems/detect-capital/

var detectCapitalUse = function (word) {
  let case1 = word == word.toUpperCase();
  let case2 = word == word.toLowerCase();
  let case3 =
    word == word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return case1 || case2 || case3;
};
