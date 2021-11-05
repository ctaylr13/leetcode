//Longest Palindromic Substring

// helper function to check if a string is a palidrome
var isPalindrome = (str) => {
  var reverse = str.split("").reverse().join("");
  console.log('reverse', reverse);
  console.log('str', str)
  if (reverse === str) {
    return reverse;
  } else {
    return false;
  }
};

// console.log(str.substr(1, 2));
// expected output: "oz"
var longestPalindrome = (s) => {
  var longestStr = ''; // will be updated as string is checked. 
  // set string length to s length 
  var strLength = s.length;
  // loop over length of entire string 
  for (let i = 0; i < s.length; i += 1) {
    var strAtIndex = s.substr(i, strLength);
    console.log('str at index', strAtIndex);
    var checkString = isPalindrome(strAtIndex); // check if current string is a palindrome
    // if you get a string back, then you have a palidrome
    console.log("check string", checkString);
    if (checkString != false) {
      if (longestStr === '') {
        longestStr = checkString
      }
      // if checkString is shorter than longest string we know weve found the longest string in the palidrome
      if (checkString.length < longestStr.length) {
        return longestStr;
      }
    }
    // if you dont get a string back decrease the strLength by 1.
    strLength = strLength - 1;
    console.log('longest str', longestStr);

  }



  return longestStr;
};

// const s = 'cbbdbabadxabax';
const s = "babad";
console.log(longestPalindrome(s));
// expected output 'bab' or 'aba';