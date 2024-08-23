// https://leetcode.com/problems/relative-ranks/

var findRelativeRanks = function (score) {
  let rank = [...score];
  score.sort((a, b) => b - a);
  return rank.map((a) => {
    let s = score.indexOf(a) + 1;
    if (s == 1) return "Gold Medal";
    else if (s == 2) return "Silver Medal";
    else if (s == 3) return "Bronze Medal";
    else return s.toString();
  });
};
