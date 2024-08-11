// https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/

var minimumAverage = function(nums) {
    let sort = nums.sort((a,b)=>a-b)
    let res = []
    for(let i=0; i<sort.length/2;i++){
        res.push(sort[i]+sort[sort.length-1-i])
    }
    return Math.min(...res)/2
};