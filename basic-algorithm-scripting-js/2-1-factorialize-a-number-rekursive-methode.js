/**
 * Return the factorial of the provided integer.
 */

function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return (num != 1) ? num * factorialize(num - 1) : 1;
}

console.log(factorialize(120));