/**
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
 * 
 */

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  newArr = arr1.concat(arr2);
  return unique(newArr);
}
function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }

  return Object.keys(obj); // или собрать ключи перебором для IE8-
}

var q = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(q);