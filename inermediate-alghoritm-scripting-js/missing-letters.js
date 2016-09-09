/**
 * Find the missing letter in the passed letter range and return it.
 * 
 * If all letters are present in the range, return undefined.
 * 
 * Here are some helpful links:
 * 1. String.prototype.charCodeAt()
 * 2. String.fromCharCode()
 */
function fearNotLetter(str) {
  var abcString = "abcdefghijklmnopqrstuvwxyz";
  var abcArr = abcString.split('');
  var strArr = str.split('');
  var res = '';

  if (strArr[0] !== 'a') {
    return undefined;
  }

  for (var i = 0; i < str.length; i++) {
    switch (strArr[i]) {
      case abcArr[i]:
        break;
      case abcArr[i + 1]:
        res = abcArr[i];
        return res;
        // break;
    }
  }

  return res === '' ? undefined : res;
}
