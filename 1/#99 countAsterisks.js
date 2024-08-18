// https://leetcode.com/problems/count-asterisks/

var countAsterisks = function (s) {
  let spl = s.split("|");
  let sum = 0;
  for (let i = 0; i < spl.length; i += 2) {
    spl[i].split("").forEach((l) => l == "*" && sum++);
  }
  return sum;
};
