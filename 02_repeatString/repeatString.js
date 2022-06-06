const repeatString = function(string, num) {
  let repeatThis = string;
  let timesRepeated = num;

  let result = "";

  if (num < 0) {
    return result = "ERROR";
  }

  for (let i = 0; i < timesRepeated; i++) {
    result += `${repeatThis}`;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
