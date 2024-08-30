// https://leetcode.com/problems/decode-xored-array/submissions/1373204868/

var decode = function (encoded, first) {
  let res = [first];
  for (let i = 0; i < encoded.length; i++) {
    res.push(res[i] ^ encoded[i]);
  }
  return res;
};
