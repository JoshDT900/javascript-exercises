const reverseString = function(string) {
  let inputString = string;
  let reversedString = "";

  for (let i = inputString.length; i >= 0; i--) {    
    reversedString += `${inputString.slice(i - 1, i)}`
  }

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
