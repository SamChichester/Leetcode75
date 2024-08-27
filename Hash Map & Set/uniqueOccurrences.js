/* 

Given an array of integers arr, return true if the number of occurrences 
of each value in the array is unique or false otherwise.

*/

var uniqueOccurrences = function(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = (map[arr[i]] || 0) + 1;
  }

  let occurrences = Object.values(map);
  let occurrences_set = new Set(occurrences);

  return occurrences.length === occurrences_set.size;
};