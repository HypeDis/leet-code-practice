let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];

var numIslands = function (grid) {
  let islandCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        islandCount++;
        grid[i][j] = 'X';
        searchAdjacent(j, i, grid);
      }
    }
  }
  return islandCount;
};

const searchAdjacent = (x, y, grid) => {
  // search above
  if (y > 0 && grid[y - 1][x] === '1') {
    grid[y - 1][x] = 'X';
    searchAdjacent(x, y - 1, grid)
  }

  // search below
  if (y < grid.length - 1 && grid[y + 1][x] === '1') {
    grid[y + 1][x] = 'X';
    searchAdjacent(x, y + 1, grid);
  }
  // search left
  if (x > 0 && grid[y][x - 1] === '1') {
    grid[y][x - 1] = 'X';
    searchAdjacent(x - 1, y, grid);
  }
  // // search right
  if (x < grid[y].length - 1 && grid[y][x + 1] === '1') {
    grid[y][x + 1] = 'X';
    searchAdjacent(x + 1, y, grid);
  }
}
// numIslands(grid)
// console.log(numIslands(grid))
// console.log(grid)

// create a bfs algorithm