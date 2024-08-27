/* 

Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such 
that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same 
order (i.e., an equal array).

*/

var equalPairs = function(grid) {
  let grid_map = new Map();

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i].join(',');
    grid_map.set(row, (grid_map.get(row) || 0) + 1);
  }

  let count = 0;

  for (let i = 0; i < grid[0].length; i++) {
    let column = [];
    for (let j = 0; j < grid.length; j++) {
      column.push(grid[j][i]);
    }

    column = column.join(',');
    if (grid_map.has(column)) {
      count += grid_map.get(column);
    }
  }

  return count;  
};