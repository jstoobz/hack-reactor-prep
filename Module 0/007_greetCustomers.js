function greetCustomer(firstName) {
  switch(true) {
    case !customerData[firstName]:
      return `Welcome! Is this your first time?`;
    case customerData[firstName].visits === 1:
      return `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    case customerData[firstName].visits >= 2:
      return `Welcome back, ${firstName}! So glad to see you again!`;
  }
}
var customerData = {
  'Joe': { visits: 1 },
  'Carol': { visits: 2 },
  'Howard': { visits: 3 },
  'Carrie': { visits: 4 }
};

var output = greetCustomer('Terrance');
console.log(output);