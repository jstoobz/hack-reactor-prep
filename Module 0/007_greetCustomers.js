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