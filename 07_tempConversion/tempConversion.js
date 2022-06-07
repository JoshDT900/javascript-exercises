const ftoc = function() {
  let fahren = arguments[0];

  let celcius = (fahren - 32) * 5/9;

  if (Number.isInteger(celcius) === false ) {
    return parseFloat(celcius.toFixed(1)) 
  } else {
    return celcius
  }
};

const ctof = function() {
  let celcius = arguments[0]

  let fahren = celcius * 9/5 + 32;

  if (Number.isInteger(fahren) === false ) {
    return parseFloat(fahren.toFixed(1)) 
  } else {
    return fahren
  }

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
