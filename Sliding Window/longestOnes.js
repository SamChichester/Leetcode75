/* 

Given a binary array nums and an integer k, return the maximum number of 
consecutive 1's in the array if you can flip at most k 0's.

*/

var longestOnes = function(nums, k) {
  let left = 0;
  let max_length = 0;
  let num_zeroes = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      num_zeroes++;
    }

    while (num_zeroes > k) {
      if (nums[left] === 0) {
        num_zeroes--;
      }
      left++;
    }
    max_length = Math.max(max_length, right - left + 1);
  }
  return max_length;
};