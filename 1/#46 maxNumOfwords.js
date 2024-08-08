// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

var mostWordsFound = function(sentences) {
    let length = sentences.map(sentence=>sentence.split(' ').length)
    return Math.max(...length)
};