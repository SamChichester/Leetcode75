/* 

Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, 
and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

*/

var closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) return false;

  let word1_map = {};
  let word2_map = {};

  for (let char of word2) {
    word2_map[char] = (word2_map[char] || 0) + 1;
  }

  for (let char of word1) {
    word1_map[char] = (word1_map[char] || 0) + 1;
    if (!(char in word2_map)) {
      return false;
    }
  }

  let arr1 = Object.values(word1_map);
  let arr2 = Object.values(word2_map);

  return compareLists(arr1, arr2);
};

function compareLists(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let counts = {};

  for (let num of arr1) {
    counts[num] = (counts[num] || 0) + 1;
  }

  for (let num of arr2) {
    if (!counts[num]) {
      return false;
    }
    counts[num]--;
  }

  return true;
}