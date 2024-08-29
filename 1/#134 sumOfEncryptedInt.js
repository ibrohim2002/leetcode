// https://leetcode.com/problems/find-the-sum-of-encrypted-integers/submissions/1372217672/

var sumOfEncryptedInt = function (nums) {
  let arr = nums.map((n) => {
    let ar = String(n).split("");
    let max = "";
    for (let i = 0; i < ar.length; i++) {
      max += Math.max(...ar);
    }
    return Number(max);
  });
  return arr.reduce((sum, curr) => {
    return sum + curr;
  }, 0);
};
