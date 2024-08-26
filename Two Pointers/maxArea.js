/* 

You are given an integer array height of length n. There are n vertical lines drawn 
such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

*/

var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;

  let max_area = 0;

  while (left < right) {
    if (Math.min(height[left], height[right]) * (right - left) > max_area) {
      max_area = Math.min(height[left], height[right]) * (right - left);
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max_area;
};