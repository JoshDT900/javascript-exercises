const palindromes = function (string) {
  let splitUp = string.toLowerCase().split("").reverse().join("").replace(/[^a-z0-9]/gi, '')

  return splitUp === string.replace(/[^a-z0-9]/gi, '').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
