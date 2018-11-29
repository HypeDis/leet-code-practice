/** Given a column title as appear in an Excel sheet, return its corresponding column number.
*
*For example:
*
*    A -> 1
*    B -> 2
*    C -> 3
*    ...
*    Z -> 26
*    AA -> 27
*    AB -> 28
*    ...*
*
* Example 1:
*
* Input: "A"
* Output: 1
*
* Example 2:
*
* Input: "AB"
* Output: 28
*
* Example 3:
*
* Input: "ZY"
* Output: 701
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  // charcode at 'A' is 65
  let columnNumber = 0
  let unit = 0
  for (let i = s.length - 1; i >= 0; i--) {
    columnNumber += (s.charCodeAt(i) - 64) * Math.pow(26, unit)
    unit += 1
  }
  return columnNumber
}

console.log(titleToNumber('AA'))
