// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/

var minimumOperations = function(nums) {
    let res = 0
    nums.forEach(num=>{
        if((num+1)%3==0) res++
        else if((num-1)%3==0) res++
    })
    return res
};