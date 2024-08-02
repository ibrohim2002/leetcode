// https://leetcode.com/problems/number-of-good-pairs/

var numIdenticalPairs = function(nums) {
    let res = 0
    nums.forEach((num,i)=>{
        nums.forEach((n,j)=>{
            num===nums[j+i+1] && res++
        })
    })
    return res
};