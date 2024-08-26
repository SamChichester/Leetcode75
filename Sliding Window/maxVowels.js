/* 

Given a string s and an integer k, return the maximum number of vowel letters in any 
substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

*/

var maxVowels = function(s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let max_vowels = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      max_vowels++;
    }
  }

  let current_vowels = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      current_vowels++;
    }
    if (vowels.has(s[i - k])) {
      current_vowels--;
    }

    max_vowels = Math.max(max_vowels, current_vowels);
  }

  return max_vowels;
};