/* 

Given an integer array nums, return true if there exists a triple of 
indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. 
If no such indices exists, return false.

*/

var increasingTriplet = function(nums) {
  let i = Infinity;
  let j = Infinity;

  for (let num of nums) {
    if (num <= i) {
      i = num;
    }
    else if (num <= j) {
      j = num;
    } else {
      return true;
    }
  }

  return false;
};