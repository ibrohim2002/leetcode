// https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript

var expect = function(val) {
    return{
       toBe: function(value){
           if (val === value) return true;
           else throw new Error("Not Equal");
       },
       notToBe: function(value){
           if (val === value) throw new Error("Equal");
           else return true;
       }
   }
};