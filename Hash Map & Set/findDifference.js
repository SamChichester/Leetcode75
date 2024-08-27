/* 

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

*/

var findDifference = function(nums1, nums2) {
  let answer = [[], []];
  const nums1_set = new Set(nums1);
  const nums2_set = new Set(nums2);

  for (let num of nums1_set) {
    if (!nums2_set.has(num)) {
      answer[0].push(num);
    } else {
      nums2_set.delete(num);
    }

  }

  for (let num of nums2_set) {
    answer[1].push(num);
  }

  return answer;
};