/* 

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square 
brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, 
square brackets are well-formed, etc. Furthermore, you may assume that the original data 
does not contain any digits and that digits are only for those repeat numbers, k. 
For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 10^5.

*/

var decodeString = function(s) {
  let num_stack = [];
  let str_stack = [];

  let current_num = 0;
  let current_str = '';

  for (let char of s) {
    if (!isNaN(char)) {
      current_num = current_num * 10 + parseInt(char);
    } else if (char === '[') {
      num_stack.push(current_num);
      str_stack.push(current_str);

      current_num = 0;
      current_str = '';
    } else if (char === ']') {
      let repeat = num_stack.pop();
      let last_str = str_stack.pop();

      current_str = last_str + current_str.repeat(repeat); 
    } else {
      current_str += char;
    }
  }

  return current_str;
};