/**
 * Return the factorial of the provided integer.
 */

function factorialize(num) {
    var a = [];
    for (i = 1; i <= num; i++) {
        a.push(i);
    }
    var b = 1;
    for (i = 0; i < a.length; i++) {
        b *= a[i];
    }
    console.log(a);
    return b;
}

console.log(factorialize(0));