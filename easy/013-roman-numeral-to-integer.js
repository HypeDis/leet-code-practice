// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// focus on the order of magnitude units (1000, 100, 10) because they will always come
// before the 'fives' numerals if they are being manipulated ex. CD = 400
// if a numeral is reducing another one skip that ones index so you dont double count it

let s = 'MCMLXXXVII' // 1987

var romanToInt = function (s) {
  let int = 0
  let sArr = s.split('')
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === 'M') {
      if (sArr[i - 1] === 'C') {
        int += 900
      } else {
        int += 1000
      }
      continue
    }
    if (sArr[i] === 'D') {
      int += 500

      continue
    }
    if (sArr[i] === 'C') {
      if (sArr[i - 1] === 'X') {
        int += 90
      } else if (sArr[i + 1] === 'M') {
        int += 900
        i += 1
      } else if (sArr[i + 1] === 'D') {
        int += 400
        i += 1
      } else {
        int += 100
      }
      continue
    }
    if (sArr[i] === 'L') {
      int += 50

      continue
    }
    if (sArr[i] === 'X') {
      if (sArr[i - 1] === 'I') {
        int += 9
      } else if (sArr[i + 1] === 'C') {
        int += 90
        i += 1
      } else if (sArr[i + 1] === 'L') {
        int += 40
        i += 1
      } else {
        int += 10
      }
      continue
    }
    if (sArr[i] === 'V') {
      int += 5

      continue
    }
    if (sArr[i] === 'I') {
      if (sArr[i + 1] === 'V') {
        int += 4
        i += 1
      } else if (sArr[i + 1] === 'X') {
        int += 9
        i += 1
      } else {
        int += 1
      }
      continue
    }
  }
  return int
}

console.log(romanToInt(s))
