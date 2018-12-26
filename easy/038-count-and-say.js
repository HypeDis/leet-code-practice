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
  // base case for when n = 1
  if (n === 1) {
    return say;
  } else {
      let count = 0;
      let currentValue = ''

      // iterate n - 1 times to keep updating say
      for (let i = 0; i < n - 1; i ++) {
        //initialize the new values every loop
        let newSay = '';
        currentValue = say[0];
        // iterate through the current say to get the counts of each number
        for (let j = 0; j < say.length; j ++) {
          if (say[j] === currentValue) {
            count += 1;
            // end the loop if we reach the last index
            if (j === say.length - 1) {
              newSay = newSay + count.toString() + currentValue.toString();
              count = 0;
            }
          } 
          // if the jth number isnt a match then we add the countandsay of the prior number
          // and start a new loop starting at the non-matching index
          else {
              newSay = newSay + count.toString() + currentValue.toString();
              // set the new currentValue to the current value say[j]
              currentValue = say[j]
              // need to go back one step so j++ starts on the current index
              j = j -1;
              count = 0;
          }
        }
        // update the say variable and start the next ith loop  
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