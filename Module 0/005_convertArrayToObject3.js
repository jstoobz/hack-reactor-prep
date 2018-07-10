function transformEmployeeData(array) {
  return employeeArr = array.map(el => {
    let employeeObj = {};
    el.forEach(prop => employeeObj[prop[0]] = prop[1]);
    return employeeObj;
  });
}

var employee = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

var result = transformEmployeeData(employee);
console.log(result);