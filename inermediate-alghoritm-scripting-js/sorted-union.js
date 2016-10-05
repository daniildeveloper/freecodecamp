/**
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 *  In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
 * The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 * Check the assertion tests for examples.
 *
 */
function uniteUnique(arr) {
    //create an empty array to store result data
    var res = [];

    //loop throught arguments
    for (var i = 0; i < arguments.length; i++) {
        var argumentsOfArray = arguments[i];

        //loops throught the array at hand
        for (var j = 0; j < argumentsOfArray.length; j++) {
            var indexV = argumentsOfArray[j];
            //check if the value is already on the final array
            if (res.indexOf(indexV) < 0) {
                res.push(indexV);
            }
        }
    }

    return res;
}


