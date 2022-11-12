import { changeMorseToWord } from "./changeMorseToWord";

const codeToText = (morseCode) => {
  console.log(morseCode);
  let Array, textArray, stringOfText, error, valueToReturn;
  //let morseCode = "--. --- --- -.. / -- --- .-. -. .. -. --.";

  // Checking for space
  // if " / " is there then add text "space"
  morseCode = morseCode.trim();
  let removeUnCharacterSlash = morseCode.replace(/(?: \/ )/g, "space");
  // if " /" is there then add text " "
  let removeUnCharacterSlash1 = removeUnCharacterSlash.replace(/(?: \/)/g, "");
  // if "/ " is there then add text " "
  let removeUnCharacterSlash2 = removeUnCharacterSlash1.replace(/(?:\/ )/g, "");
  let removeUnCharacterSlash3 = removeUnCharacterSlash2.replace(/(?:\/)/g, " ");
  removeUnCharacterSlash3 = removeUnCharacterSlash3.trim();
  console.log(removeUnCharacterSlash3);
  Array = removeUnCharacterSlash3.split("space");

  textArray = [];
  error = [];

  Array.map((word) => {
    word = word.split(" ");
    word.map((letter) => {
      changeMorseToWord(letter, textArray, error);
      if (error.length !== 0) {
        return error;
      }
    });
    textArray.push(" ");
  });

  console.log(textArray);
  // eslint-disable-next-line no-useless-escape
  stringOfText = textArray.toString().replace(/\,/g, "");

  console.log(error);
  error.length === 0 ? (valueToReturn = stringOfText) : (valueToReturn = error);
  console.log(valueToReturn);
  return valueToReturn;
  //console.log(textArray.toString().replace(/\,/g, ""));
};

export default codeToText;
