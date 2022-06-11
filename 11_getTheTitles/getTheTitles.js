const getTheTitles = function() {
  let mainArr = arguments[0];
  let bookArr = [];

  for (let i of mainArr) {    
    bookArr.push(i.title)
  }

  return bookArr;
};

// Do not edit below this line
module.exports = getTheTitles;
