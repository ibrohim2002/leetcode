// https://leetcode.com/problems/number-of-senior-citizens/

var countSeniors = function (details) {
  return details.filter((detail) => detail.substring(11, 13) > 60).length;
};
