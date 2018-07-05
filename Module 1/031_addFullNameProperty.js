function addFullNameProperty(obj) {
  return obj['fullName'] = obj.firstName.concat(' ' + obj.lastName);
}