/* 

Given an integer array nums, return an array answer such that answer[i] is equal 
to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

*/

var productExceptSelf = function(nums) {
  let n = nums.length;
  let answers = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    answers[i] = answers[i - 1] * nums[i - 1];
  }

  let multiple = 1;
  for (let i = n - 1; i > -1; i--) {
    answers[i] *= multiple;
    multiple *= nums[i];
  }

  return answers;
};