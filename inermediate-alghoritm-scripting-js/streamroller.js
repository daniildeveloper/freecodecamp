/*
 * Flatten a nested array. You must account for varying levels of nesting.
 */
function steamrollArray(arr) {
    // I'm a steamroller, baby
    var res = [];
    var roll = function (x) {
        if (!Array.isArray(x)) {
            res.push(x);
        } else {
            for (var arg in x) {
                roll(x[arg]);
            }
        }
    };
    arr.forEach(roll);
    return res;
}