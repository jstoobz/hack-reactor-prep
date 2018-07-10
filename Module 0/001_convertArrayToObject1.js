function transformFirstAndLast(array) {
  return { [array[0]]: array[array.length - 1] };
}

var myArr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
var result = transformFirstAndLast(myArr);
console.log(result);