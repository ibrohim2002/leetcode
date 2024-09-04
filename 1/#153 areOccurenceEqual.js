// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

var areOccurrencesEqual = function (s) {
  let filter = s.split("").filter((a, i) => s.indexOf(a) == i);
  let prev = 0;
  for (let i = 0; i < filter.length; i++) {
    let count = 0;
    for (let j = 0; j < s.length; j++) {
      if (filter[i] == s[j]) count++;
    }
    if (prev) {
      if (count != prev) return false;
    }
    prev = count;
  }
  return true;
};
