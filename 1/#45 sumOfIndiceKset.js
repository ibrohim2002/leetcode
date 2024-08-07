// https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/submissions/1347477196/
var sumIndicesWithKSetBits = function(nums, k) {
    let res = 0
    nums.forEach((num,i)=>{
        if(i.toString(2).split("1").length-1 === k){
            res+=num
        }
    })
    return res
};