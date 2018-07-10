function addFullNameProperty(obj) {
  return obj['fullName'] = obj.firstName.concat(` ${obj.lastName}`);
}

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

addFullNameProperty(person);
console.log(person.fullName);