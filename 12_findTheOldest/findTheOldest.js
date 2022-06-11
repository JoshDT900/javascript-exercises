const findTheOldest = function() {
  let peopleArr = arguments[0];

  for (const i of peopleArr) {
      if (!i.yearOfDeath) {
        i.yearOfDeath = new Date().getFullYear();
      }      
    }

  peopleArr.sort((person, nextPerson) =>  (nextPerson.yearOfDeath - nextPerson.yearOfBirth) - (person.yearOfDeath - person.yearOfBirth))

  return peopleArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
