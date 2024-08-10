// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

var numberOfSteps = function(num) {
    let counter = 0
    while(num){
        if(num%2){
            num--
        }else{
            num/=2
        }
        counter++
    }
    return counter
};