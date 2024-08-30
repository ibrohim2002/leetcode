// https://leetcode.com/problems/find-maximum-number-of-string-pairs/

var maximumNumberOfStringPairs = function (words) {
  let sortWords = words.map((a) => {
    return a.split("").sort().join("");
  });
  return (
    sortWords.length -
    sortWords.filter((word, i) => {
      return sortWords.indexOf(word) == i;
    }).length
  );
};
