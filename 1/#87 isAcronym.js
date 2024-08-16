// https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/

var isAcronym = function(words, s) {
    let str = ''
    words.forEach((w)=>{
        str+=w[0]
    })
    return str==s
};