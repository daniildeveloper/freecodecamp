/**
 * Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
 */

function repeatStringNumTimes(str, num) {
    // repeat after me
    var arr = [];
    if (num < 0) {
        return "";
    } else {
        for (var i = 0; i < num; i++) {
            arr[i] = str;
        }
        return arr.join("");
    }
}

var q = repeatStringNumTimes("abc", 3);
console.log(q);