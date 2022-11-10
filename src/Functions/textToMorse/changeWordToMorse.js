function changeWordToMorse(letter, morseArray) {
  switch (letter) {
    case " ":
      morseArray.push("/ ");
      break;
    case "a":
      morseArray.push(".- ");
      break;
    case "b":
      morseArray.push("-... ");
      break;
    case "c":
      morseArray.push("-.-. ");
      break;
    case "d":
      morseArray.push("-.. ");
      break;
    case "e":
      morseArray.push(". ");
      break;
    case "f":
      morseArray.push("..-. ");
      break;
    case "g":
      morseArray.push("--. ");
      break;
    case "h":
      morseArray.push(".... ");
      break;
    case "i":
      morseArray.push(".. ");
      break;
    case "j":
      morseArray.push(".--- ");
      break;
    case "k":
      morseArray.push("-.- ");
      break;
    case "l":
      morseArray.push(".-.. ");
      break;
    case "m":
      morseArray.push("-- ");
      break;
    case "n":
      morseArray.push("-. ");
      break;
    case "o":
      morseArray.push("--- ");
      break;
    case "p":
      morseArray.push(".--. ");
      break;
    case "q":
      morseArray.push("--.- ");
      break;
    case "r":
      morseArray.push(".-. ");
      break;
    case "s":
      morseArray.push("... ");
      break;
    case "t":
      morseArray.push("- ");
      break;
    case "u":
      morseArray.push("..- ");
      break;
    case "v":
      morseArray.push("...- ");
      break;
    case "w":
      morseArray.push(".-- ");
      break;
    case "x":
      morseArray.push("-..- ");
      break;
    case "y":
      morseArray.push("-.-- ");
      break;
    case "z":
      morseArray.push("--.. ");
      break;
    default:
      break;
  }
}
module.exports = changeWordToMorse