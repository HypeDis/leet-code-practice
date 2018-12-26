// On a N * N grid, we place some 1 * 1 * 1 cubes.
// Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).
// *self note: index i is the 'x' co-ord and index j is the 'y' co-ord
// Return the total surface area of the resulting shapes.

// find the total surface area of all the cubes independently
// if any 2 cubes touch take away 2 units of surface area
// check how many cubes touch in the i,j, and vertical directions and subtract that surface area
// when 2 cubes touch 2 units of SA are removed

let grid = [[2, 2, 2], [2, 1, 2], [2, 2, 1]] // 46

var surfaceArea = function (grid) {
  let gridCopy = grid.slice()

  // add all the v values together than multiply by 6 units^2 per cube
  let totalSA = gridCopy.reduce(function (a, b) {
    return a + b.reduce(function (a, b) { return a + b }, 0)
  }, 0) * 6

  // find how many surfaces touch in i, j, and V
  let surfaceTouchI = 0
  let surfaceTouchJ = 0
  let surfaceTouchVertical = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // if three cubes are stacked only 2 touch etc...

      // this if statment checks there is atleast one block in that location
      // or we would get a negative number if there are 0 blocks there
      if (grid[i][j] - 1 > 0) {
        surfaceTouchVertical = surfaceTouchVertical + grid[i][j] - 1
      }

      // sort of like a linked list where we only need to iterate to the second to last index because
      // we are pointing to the next index as well
      // it also skips this step if i has a length of 1

      if (j < grid[i].length - 1) {
        surfaceTouchI = surfaceTouchI + Math.min(grid[i][j], grid[i][j + 1])
      }

      if (i < grid.length - 1) {
        surfaceTouchJ = surfaceTouchJ + Math.min(grid[i][j], grid[i + 1][j])
      }
    }
  }
  totalSA = totalSA - (surfaceTouchI + surfaceTouchJ + surfaceTouchVertical) * 2

  return totalSA
}

console.log(surfaceArea(grid))
