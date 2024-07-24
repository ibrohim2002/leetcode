// https://leetcode.com/problems/score-of-a-string/

var scoreOfString = function(s) {
    let res = 0
    s.split('').forEach((letter,index)=>{
        if(index!=s.length-1){
            res = res + Math.abs(letter.charCodeAt()-s[index+1].charCodeAt())
        }
    })
    return res
};