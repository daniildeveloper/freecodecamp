/**
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 */
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    console.log(str.substr(-target.length));
    return str.substr(0 - target.length) === target ? true : false;
}

var q = confirmEnding("He has to give me a new name", "name");
console.log(q);