// https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {
  let sort1 = s.split("").sort().join("");
  let sort2 = t.split("").sort().join("");
  return sort1 == sort2;
};
