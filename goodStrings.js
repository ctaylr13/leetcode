// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

var replaceString = (origString, index) => {
  let newStringArray = origString.split('');
  newStringArray[index] = '';
  let newString = newStringArray.join('');
  return newString;
}

var countCharacters = (words, chars) => {
  let answersArray = []; // final answer array 
  let testChars = chars;
  // loop over length of words array 

  for (let i = 0; i < words.length; i += 1) {
    let checkWord = words[i]; //word from array we are checking 
    let wordMatch = false; // initialize this boolean to false, will use to push final string to array 
    // loop over length of word we are checking
    for (let j = 0; j < checkWord.length; j += 1) {
      // loop over Chars 
      for (let k = 0; k < testChars.length; k += 1) {
        // if the letters match
        if (checkWord[j] === testChars[k]) {
          testChars = replaceString(testChars, k);
          checkWord = replaceString(checkWord, j);

        }

      }
    }
    if (checkWord.length === 0) {
      wordMatch = true;
    }

    // push to array of wordMatch = true
    if (wordMatch) {
      answersArray.push(words[i]);
    }
  }
  if (testChars.length > 0) {
    return 0;
  }
  let answersString = answersArray.join().replace(',', '').length;

  return answersString;
};

var words = ['hello', 'world', 'leetcode'];
var chars = "welldonehoneyr"

console.log(countCharacters(words, chars));