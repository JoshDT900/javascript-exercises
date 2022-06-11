const fibonacci = function(val) {
  let fibVal = val;
  let conditionVal = val;

  if (fibVal < 0) {
    return "OOPS";
  } else if (typeof fibVal === 'string'){
    parseInt(fibVal)
  }

  let firstVal = 1;
  let secondVal = 0;
  let temp = 0;

  let fibArr = [];

  while (conditionVal >= 0) {
    temp = firstVal;
    firstVal = firstVal + secondVal;
    secondVal = temp;
    fibArr.push(secondVal);
    conditionVal--;
  }

  return fibArr[fibVal - 1];
};

// Do not edit below this line
module.exports = fibonacci;
