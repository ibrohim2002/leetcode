// https://leetcode.com/problems/matrix-diagonal-sum/submissions/1360078424/

var diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
    if (i !== mat.length - i - 1) {
      sum += +mat[i][mat.length - i - 1];
    }
  }
  return sum;
};
