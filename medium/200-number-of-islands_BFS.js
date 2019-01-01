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
        findLandBFS(j, i, grid);
      }
    }
  }
  return islandCount;
};

const findLandBFS = (x, y, grid) => {
  let up = [0,1];
  let down = [0, -1];
  let left = [-1, 0];
  let right = [1, 0];
  let directions = [up,down,left,right];
  let checkQueue = [[x,y]];
  while (checkQueue.length > 0) {
    let currentLocation = checkQueue.shift();
    x = currentLocation[0];
    y = currentLocation[1];
    if (grid[y][x] === '1') {
      grid[y][x] = '0'
      directions.forEach(direction => {
        if (x + direction[0] >= 0 && x + direction[0] < grid[0].length && y + direction[1] >= 0 && y + direction[1] < grid.length) {
          checkQueue.push([x + direction[0], y + direction[1]])
        }
      });
    }
  }
}
// numIslands(grid)
console.log(numIslands(grid))
// console.log(grid)

// create a bfs algorithm