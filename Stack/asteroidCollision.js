/* 

We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents 
its direction (positive meaning right, negative meaning left). Each asteroid moves at 
the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the 
smaller one will explode. If both are the same size, both will explode. Two asteroids 
moving in the same direction will never meet.

*/

var asteroidCollision = function(asteroids) {
  let stack = [];

  for (let asteroid of asteroids) {
    let collision = false;

    while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
      if (stack[stack.length - 1] < -asteroid) {
        stack.pop();
      } else if (stack[stack.length - 1] === -asteroid) {
        stack.pop();
        collision = true;
        break;
      } else {
        collision = true;
        break;
      }
    }
    
    if (!collision) {
      stack.push(asteroid);
    }
  }

  return stack;
};