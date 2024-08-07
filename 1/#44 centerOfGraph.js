// https://leetcode.com/problems/find-center-of-star-graph/

var findCenter = function (edges) {
  if (edges.every((edge) => edge.includes(edges[0][0]))) {
    return edges[0][0];
  } else {
    return edges[0][1];
  }
};
