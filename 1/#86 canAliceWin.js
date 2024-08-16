// https://leetcode.com/problems/find-if-digit-game-can-be-won/submissions/1358157013/

var canAliceWin = function(nums) {
    let single = 0
    let double = 0
    nums.forEach(num=>{
        if(num<10){
            single+=num
        }else{
            double+=num
        }
    })
    return single==double ? false : true
};