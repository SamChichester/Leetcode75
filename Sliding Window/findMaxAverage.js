/* 

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average 
value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

*/

var findMaxAverage = function(nums, k) {
  let max_sum = 0;

  for (let i = 0; i < k; i++) {
    max_sum += nums[i];
  }

  let current_sum = max_sum;
  for (let i = k; i < nums.length; i++) {
    current_sum = current_sum - nums[i - k] + nums[i];
    max_sum = Math.max(max_sum, current_sum);
  }

  return max_sum / k;
};