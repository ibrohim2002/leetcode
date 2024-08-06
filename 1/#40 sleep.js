// https://leetcode.com/problems/sleep/

async function sleep(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, millis);
  });
}
