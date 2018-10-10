  //  if (n===1) {
  //       return '1'
  //   }
  //   if (n === 2) {
  //      return '11' 
  //   }
  //   if (n === 3) {
  //       return '21'
  //   }
  //   if (n === 4) {
  //       return '1211'
  //   }
//start 11:45 am 
// give up 12:55 pm, couldnt figure out the question

//figured it out and coded it all in about 1 hour at work

var countAndSay = function(n) {
  // iterate through a string 
  let say = '1'
  if (n === 1) {
    return say;
  } else {
      let count = 0;
      let currentValue = ''
      // let currentSay = say;
      
      for (let i = 0; i < n - 1; i ++) {
        let newSay = '';
        currentValue = say[0];
        for (let j = 0; j < say.length; j ++) {
          if (say[j] === currentValue) {
            count += 1;
            if (j === say.length - 1) {
              newSay = newSay + count.toString() + currentValue.toString();
              count = 0;
            }
          } else {
              newSay = newSay + count.toString() + currentValue.toString();
              j = j -1;
              if(say[j + 1]) {
              currentValue = say[j + 1]
              } 
              count = 0;
          }
        }  
        say = newSay;
      }
  }
  return say;
}
console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(6));