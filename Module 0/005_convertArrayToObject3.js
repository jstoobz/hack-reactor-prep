function transformEmployeeData(array) {
  return employeeArr = array.map(el => {
    let employeeObj = {};
    el.forEach(prop => employeeObj[prop[0]] = prop[1]);
    return employeeObj;
  });
}