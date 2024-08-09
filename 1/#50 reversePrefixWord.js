// https://leetcode.com/problems/reverse-prefix-of-word/

var reversePrefix = function(word, ch) {
    let i = word.indexOf(ch)+1
    return word.slice(0,i).split('').reverse().join('') + word.slice(i)
};