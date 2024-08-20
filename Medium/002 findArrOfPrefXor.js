// https://leetcode.com/problems/find-the-original-array-of-prefix-xor/submissions/1362237866/

var findArray = function (pref) {
  let arr = [pref[0]];
  for (let i = 1; i < pref.length; i++) {
    arr[i] = pref[i - 1] ^ pref[i];
  }
  return arr;
};
