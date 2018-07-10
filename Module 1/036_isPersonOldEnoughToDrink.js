function isPersonOldEnoughToDrink(person) {
  return (person.age >= 21);
}

var obj = {
  age: 16
};

var output = isPersonOldEnoughToDrink(obj);
console.log(output);