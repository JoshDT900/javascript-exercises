const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let origArr = [...arr];

  return origArr.reduce((a , b) => a + b, 0)
};

const multiply = function(arr) {
  let origArr = [...arr];

  return origArr.reduce((a , b) => a * b, 1)
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let total = 1;  

  for (let i = 1; i <= a; i++) {    
     total *= i;  
  }

  return total;
};

factorial(10)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
