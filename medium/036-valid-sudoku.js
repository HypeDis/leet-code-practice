/* Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be
validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true

Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

Note:

    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.
    The given board contain only digits 1-9 and the character '.'.
    The given board size is always 9x9. */

// check rows
// check columns
// check boxes

// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */

let board =
[
	[".",".",".",".","5",".",".","1","."],
	[".","4",".","3",".",".",".",".","."],
	[".",".",".",".",".","3",".",".","1"],
	["8",".",".",".",".",".",".","2","."],
	[".",".","2",".","7",".",".",".","."],
	[".","1","5",".",".",".",".",".","."],
	[".",".",".",".",".","2",".",".","."],
	[".","2",".","9",".",".",".",".","."],
	[".",".","4",".",".",".",".",".","."]
]
var isValidSudoku = function (board) {
  if (checkRows(board) === false) {
		return false
	} else if (checkColumns(board) === false) {
		return false
	} else if (checkBoxes(board) === false) {
		return false
	} else {
		return true
	}
}

let checkRows = function (board) {
	for (let i = 0; i < board.length; i ++) {
		let row = board[i].filter((value) => value !== '.');
		let rowSet = new Set(row);
		
		if (row.length !== rowSet.size) {
			return false
		}
	}
}
let checkColumns = function (board) {
	for (let col = 0; col < board[0].length; col++) {
		let currCol = [];
		for (let row = 0; row < board.length; row++) {
			let currVal = board[row][col];
		  currCol.push(board[row][col]);
		}
		currCol = currCol.filter(val => val !== '.')
		let currColSet = new Set(currCol);
	
		if (currCol.length !== currColSet.size) {
			return false;
		}
	}
}

let checkBoxes = function (board) {
  for (let cornerX = 0; cornerX < board[0].length - 2; cornerX += 3) {
		for (let cornerY = 0; cornerY < board.length - 2; cornerY += 3) {
			let boxVals = []
			for (let row = 0; row < 3; row++) {
				boxVals.push.apply(boxVals, board[cornerY + row].slice(cornerX,cornerX + 3))
			}
			boxVals = boxVals.filter(val => val !== '.' )
			let boxValsSet = new Set(boxVals)
			if (boxVals.length !== boxValsSet.size) {
				return false
			}
		}
	}
}

console.log(isValidSudoku(board))