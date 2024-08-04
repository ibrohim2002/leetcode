// https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript

var once = function(fn) {
    let isCalled = 0
    return function(...args){
        if(isCalled){
            return undefined
        } 
        else{
            isCalled=1
            return fn(...args)
        }
    }
};