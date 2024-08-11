// https://leetcode.com/problems/decode-the-message/

var decodeMessage = function (key, message) {
  key = key.split(" ").join("").split("");
  key = key.filter((k, i) => key.indexOf(k) === i);
  return message
    .split(" ")
    .map((words) => {
      return words
        .split("")
        .map((word) => String.fromCharCode(97 + key.indexOf(word)))
        .join("");
    })
    .join(" ");
};
