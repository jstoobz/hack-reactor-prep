function convertDoubleSpaceToSingle(str) {
  return str.split('  ').join(' ');
}

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);