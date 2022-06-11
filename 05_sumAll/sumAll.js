const sumAll = function() {
  let argArr = [...arguments];
  let total = 0;

  argArr.sort((a,b) => a - b);  

  if (typeof argArr[0] != "number" || typeof argArr[1] != "number") {
    return "ERROR";
  }

  for (let i = argArr[0]; i <= argArr[1]; i++) {
    if (argArr[i] < 0) {      
      return "ERROR";
    } else {
      total += i;
    }    
  }

  return total;
};

sumAll(1, 4)

// Do not edit below this line
module.exports = sumAll;
