/* 

Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the
 resulting array. Return 0 if there is no such subarray.

*/

var longestSubarray = function(nums, k) {
  let left = 0;
  let max_length = 0;
  let num_zeroes = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      num_zeroes++;
    }

    while (num_zeroes > 1) {
      if (nums[left] === 0) {
        num_zeroes--;
      }
      left++;
    }
    max_length = Math.max(max_length, right - left);
  }
  return max_length;
};