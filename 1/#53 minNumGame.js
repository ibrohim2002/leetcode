// https://leetcode.com/problems/minimum-number-game/

var numberGame = function(nums) {
    let arr = []
    let num = nums.sort((a,b)=>{
       return a-b
    })
    for(let i=0;i<num.length;i+=2){
        arr.push(num[i+1])
        arr.push(num[i])
    }
    return arr
};