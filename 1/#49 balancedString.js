// https://leetcode.com/problems/split-a-string-in-balanced-strings/

var balancedStringSplit = function(s) {
    let r = 0
    let l = 0
    let sum = 0
    s.split('').forEach((a)=>{
        if(a=='R') r++
        else l++
        if(r==l) sum++ 
    })
    return sum
};