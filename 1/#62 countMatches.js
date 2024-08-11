// https://leetcode.com/problems/count-items-matching-a-rule/

var countMatches = function (items, ruleKey, ruleValue) {
  let i = ruleKey == "type" ? 0 : ruleKey == "color" ? 1 : 2;
  return items.filter((item) => item[i] == ruleValue).length;
};
