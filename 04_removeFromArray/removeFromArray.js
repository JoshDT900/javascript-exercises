const removeFromArray = function() {
  let storeArr = [];

  for (let i = 0; i < arguments.length; i++) {    
    if (Array.isArray(arguments[i])) {
      storeArr = arguments[i];
    }

    if (storeArr.indexOf(arguments[i]) > -1) {
      let index = storeArr.indexOf(arguments[i]);
      storeArr.splice(index, 1);
    }
  }

  return storeArr;
};

// Do not edit below this line
module.exports = removeFromArray;
