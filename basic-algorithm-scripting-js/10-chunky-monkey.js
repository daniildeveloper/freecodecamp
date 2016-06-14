/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */
function chunkArrayInGroups(arr, size) {
    var resultArray = [];
    var i = 0;

    while (i < arr.length) {
        resultArray.push(arr.slice(i, i += size));
    }

    return resultArray;
}

var q = chunkArrayInGroups(["a", "b", "c", "d"], 2);

console.log(q);