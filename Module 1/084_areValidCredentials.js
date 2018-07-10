function areValidCredentials(name, password) {
  return (name.length > 3 && password.length >= 8);
}

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output);