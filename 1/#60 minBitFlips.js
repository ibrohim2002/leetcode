// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/

var minBitFlips = function(start, goal) {
    let count = 0
    let num1 = start.toString(2)
    let num2 = goal.toString(2)
    if(num1.length>num2.length){
        num2 = num2.padStart(num1.length,'0')
    }else{
        num1 = num1.padStart(num2.length,'0')
    }
    for(let i=0; i<num1.length; i++){
        num1[i]!==num2[i] && count++
    }
    return count
};