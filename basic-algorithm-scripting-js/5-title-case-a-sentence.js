/**
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 * 
 * For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 */


function titleCase(str) {
    str = str.toLowerCase();
    //create an array with words

    function capitalizeFirstLetter(string) {
        var pieces = str.split(" ");
        for (var i = 0; i < pieces.length; i++) {
            var j = pieces[i].charAt(0).toUpperCase();
            pieces[i] = j + pieces[i].substr(1);
        }
        return pieces.join(" ");
    }
    return capitalizeFirstLetter(str);
}

// console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));