function isPersonOldEnoughToDrive(person) {
  return (person.age >= 16);
}

var obj = {
  age: 16
};

var output = isPersonOldEnoughToDrive(obj);
console.log(output);