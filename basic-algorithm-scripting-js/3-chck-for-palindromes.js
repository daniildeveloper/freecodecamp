/**
 * Return true if the given string is a palindrome. Otherwise, return false. 
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. 
 * Note You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
 * We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
 */
function palindrome(str) {
    //firstly - reverse given string
    var reverseString = str.split("").reverse().join("").toLowerCase();
    reverseString = reverseString.replace(/[^a-zA-Z0-9]/g, "");
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(str);

    //check for palindrome
    if (reverseString === str) {
        return true;
    } else {
        return false;
    }
}



console.log(palindrome("0_0 (: /-\ :) 0-0"));