/**
 * Remove all falsy values from an array.
 * 
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 */
function bouncer(arr) {
    return arr.filter(function(value) {
        return value !== false && value !== null && value !== "" && value !== undefined && value == value && value !== 0;
    });

}

var q = bouncer([7, "ate", "", false, 9]);
var q1 = bouncer([1, null, NaN, 2, undefined]);
var q2 = bouncer([false, null, 0, NaN, undefined, ""]);

console.log(q2);