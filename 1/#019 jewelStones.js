// https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function (jewels, stones) {
  let res = 0;
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      jewels[i] == stones[j] && res++;
    }
  }
  return res;
};
