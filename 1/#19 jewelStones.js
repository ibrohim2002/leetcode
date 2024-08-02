// https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function(jewels, stones) {
    let res = 0
    jewels.split('').forEach(a=>{
        stones.split('').forEach(b=>{
            a==b && res++
        })
    })
    return res
};