// https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/

var sumCounts = function(nums) {
    let sum = 0
    for(let i=0; i<nums.length; i++){
        let arr = new Set()
        for(let j=i; j<nums.length; j++){
            arr.add(nums[j])
            sum+=arr.size**2
        }
    }
    return sum
};