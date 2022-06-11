const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function() {
  let peopleArr = arguments[0];

  for (const i of peopleArr) {
      if (!i.yearOfDeath) {
        i.yearOfDeath = new Date().getFullYear();
      }      
    }

  peopleArr.sort((person, nextPerson) =>  (nextPerson.yearOfDeath - nextPerson.yearOfBirth) - (person.yearOfDeath - person.yearOfBirth))

  console.log(peopleArr);
  

  return peopleArr[0];
};

findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;
