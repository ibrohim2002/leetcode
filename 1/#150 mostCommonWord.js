// https://leetcode.com/problems/most-common-word/?envType=problem-list-v2&envId=string&difficulty=EASY

var mostCommonWord = function (paragraph, banned) {
  let arr = paragraph
    .toLowerCase()
    .match(/[a-z]+/g)
    .filter((item) => !banned.includes(item));
  let objArr = arr.map((a) => {
    let counter = 0;
    arr.forEach((ar) => {
      if (a == ar) counter++;
    });
    return { word: a, count: counter };
  });
  objArr.sort((a, b) => b.count - a.count);
  return objArr[0].word;
};
