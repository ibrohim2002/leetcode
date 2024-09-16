// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/

var maxWidthOfVerticalArea = function (points) {
  let sortedPoints = points.sort((a, b) => b[0] - a[0]);
  let res = sortedPoints.map((num, i) => {
    if (sortedPoints.length > i + 1) return num[0] - sortedPoints[i + 1][0];
    else return 0;
  });
  return Math.max(...res);
};
