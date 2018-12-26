/* Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
] */

var generateParenthesis = function (n) {
  let parensTable = { 1: ['()'] }
  if (n === 1) {
    return parensTable[1]
  }

  let currentLevel = 2
  while (currentLevel <= n) {
    let tempParens = []

    for (let level = 1; level <= Math.floor(currentLevel / 2); level++) {
      let otherLevel = currentLevel - level
      for (let j = 0; j < parensTable[level].length; j++) {
        for (let k = 0; k < parensTable[otherLevel].length; k++) {
          let paren = parensTable[level][j] + parensTable[otherLevel][k]
          let parenMirror = getMirror(paren)
          tempParens.push(paren, parenMirror)
        }
      }
    }
    for (let i = 0; i < parensTable[currentLevel - 1].length; i++) {
      let wrapParen = '(' + parensTable[currentLevel - 1][i] + ')'
      let wrapParenMirror = getMirror(wrapParen)
      tempParens.push(wrapParen, wrapParenMirror)
    }
    tempParens = tempParens.filter(paren => paren != null)
    let tempParensSet = new Set(tempParens)
    parensTable[currentLevel] = Array.from(tempParensSet)

    currentLevel += 1
  // create a hash table with the total parens for each n
  // iterate through the hash table and sum together the parens ex: current level = 4 => 1+3 2+2 . add the wraps
  }
  return parensTable[n]
}

let getMirror = function (parens) {
  let parenSplit = parens.split('')
  let parenMirror = parenSplit.reverse()
  parenMirror = flipParens(parenMirror)
  if (parenMirror === parens) {
    parenMirror = null
  }
  return parenMirror
}

let flipParens = function (parens) {
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      parens[i] = ')'
    } else {
      parens[i] = '('
    }
  }
  return parens.join('')
}

console.log(generateParenthesis(5))