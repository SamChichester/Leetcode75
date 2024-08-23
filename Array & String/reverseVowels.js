/* 

Given a string s, 
reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear 
in both lower and upper cases, more than once.

*/

var reverseVowels = function(s) {
  let vowel_set = new Set('aeiouAEIOU');
  let arr = s.split('');

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (left < right && !vowel_set.has(arr[left])) {
      left ++;
    }

    while (left < right && !vowel_set.has(arr[right])) {
      right --;
    }

    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left ++;
      right --;
    }
  }

  return arr.join('');
};
