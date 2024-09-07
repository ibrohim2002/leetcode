// https://leetcode.com/problems/add-two-promises/

var addTwoPromises = async function (promise1, promise2) {
  let [res1, res2] = await Promise.all([promise1, promise2]);
  return res1 + res2;
};
