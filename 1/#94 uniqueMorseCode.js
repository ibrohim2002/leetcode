// https://leetcode.com/problems/unique-morse-code-words/

var uniqueMorseRepresentations = function (words) {
  let morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let morseMap = words.map((word) => {
    let a = "";
    for (let i = 0; i < word.length; i++) {
      a += morse[word.charCodeAt(i) - 97];
    }
    return a;
  });
  return morseMap.filter((a, i) => morseMap.indexOf(a) === i).length;
};
