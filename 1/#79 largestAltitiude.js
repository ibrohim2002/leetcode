// https://leetcode.com/problems/find-the-highest-altitude/submissions/1354944492/

var largestAltitude = function (gain) {
  let count = 0;
  let altitudes = gain.map((g) => {
    return (count += g);
  });
  return Math.max(0, ...altitudes);
};
