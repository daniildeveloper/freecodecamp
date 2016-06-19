/**
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
 * 
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 * 
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * 
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */
function rot13(str) { // LBH QVQ VG!
  //разбиваю строку на массив, чтобы пройти по нему циклом.
  arrstr = str.split("");
  //console.log(arrstr);

  //функция принимает на вход литеру(l) и декодирует ее по шрифту Цезаря.
  function cc(l) {
    switch (l) {
      case "A":
        return "N";

      case "B":
        return "O";

      case "C":
        return "P";

      case "D":
        return "Q";

      case "E":
        return "R";

      case "F":
        return "S";

      case "G":
        return "T";

      case "H":
        return "U";

      case "I":
        return "V";

      case "J":
        return "W";

      case "K":
        return "X";

      case "L":
        return "Y";

      case "M":
        return "Z";

      case "N":
        return "A";

      case "O":
        return "B";

      case "P":
        return "C";

      case "Q":
        return "D";

      case "R":
        return "E";

      case "S":
        return "F";

      case "T":
        return "G";

      case "U":
        return "H";

      case "V":
        return "I";

      case "W":
        return "J";

      case "X":
        return "K";

      case "Y":
        return "L";

      case "Z":
        return "M";

      default:
        return l;

    }
  }

  endString = [];
  //прохожу циклом и заменяю каждый элементы функцией cc
  for (var i = 0; i < arrstr.length; i++) {
    endString[i] = cc(arrstr[i]);
  }
  console.log(endString);
  str = endString.join("");
  //console.log(str);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");