function isPersonOldEnoughToVote(person) {
  return (person.age >= 18);
}

var obj = {
  age: 19
};

var output = isPersonOldEnoughToVote(obj);
console.log(output);