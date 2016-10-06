/**
 * Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
 *
 * For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
 *
 * Calling this returned function with a single argument will then return the sum:
 *
 * var sumTwoAnd = addTogether(2);
 * sumTwoAnd(3) returns 5.
 * If either argument isn't a valid number, return undefined.
 */
function addTogether() {
//    check if given arg is number
    var checkForType = function (a) {
        if (typeof a !== 'number') {
            return undefined;
        } else {
            return a;
        }
    };

    if (arguments.length > 1) {
        var x = checkForType(arguments[0]);
        var y = checkForType(arguments[1]);
        if (x === undefined || y === undefined) {
            return undefined;
        } else {
            return x + y;
        }
    } else {
        var c = arguments[0];
        if (checkForType(c)) {
            return function (arg2) {
                if (c === undefined || checkForType(arg2) === undefined) {
                    return undefined;
                } else {
                    return c + arg2;
                }
            };
        }
    }
}


