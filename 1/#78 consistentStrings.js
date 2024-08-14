// https://leetcode.com/problems/count-the-number-of-consistent-strings/submissions/1354931648/

var countConsistentStrings = function (allowed, words) {
  let counter = 0;
  for (let word of words) {
    let res = true;
    for (let w of word) {
      if (!allowed.includes(w)) {
        res = false;
        break;
      }
    }
    res && counter++;
  }
  return counter;
};
