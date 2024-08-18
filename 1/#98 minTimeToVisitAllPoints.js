// https://leetcode.com/problems/minimum-time-visiting-all-points/

var minTimeToVisitAllPoints = function (points) {
  let sum = 0;
  for (let i = 0; i < points.length - 1; i++) {
    sum += Math.max(
      Math.abs(points[i][0] - points[i + 1][0]),
      Math.abs(points[i][1] - points[i + 1][1])
    );
  }
  return sum;
};
