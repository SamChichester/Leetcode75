/* 

For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t 
(i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

*/

var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';

  let a = str1.length;
  let b = str2.length;

  while (b) {
    let saved_b = b;
    b = a % b;
    a = saved_b;
  }
  return str1.substring(0, a);
};
