/* 

You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum 
equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

*/

var maxOperations = function(nums, k) {
  let total = 0;
  let map = {};

  for (let num of nums) {
    let remaining = k - num;
    if (map[remaining] > 0) {
      total++;
      map[remaining]--;
    } else {
      map[num] = (map[num] || 0) + 1;
    }
  }

  return total;
};