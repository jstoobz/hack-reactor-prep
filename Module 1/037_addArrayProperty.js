function addArrayProperty(obj, key, arr) {
  return obj[key] = arr;
}

var myObj = {};
var myArray = [1, 3];

addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty);