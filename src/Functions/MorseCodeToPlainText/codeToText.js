import { changeMorseToWord } from "./changeMorseToWord";

const codeToText = (morseCode) => {
  let Array, textArray, stringOfText, error, valueToReturn;

  // Checking for space
  // if " / " is there then add text "space"
  //morseCode = morseCode.trim();

  //let removeUnCharacterSlash = morseCode.replace(/(?: \/ )/g, "space ");

  let removeEmDashes = morseCode.replace(/\u2014/g, "--");
  console.log(removeEmDashes);
  let removeUnCharacterSlash = removeEmDashes;

  for (let i = 0; i < morseCode.length; i++) {
    removeUnCharacterSlash = removeUnCharacterSlash.replace(
      /(?: \/ )/,
      "space "
    );
  }

  // if " /" is there then add text " "
  let removeUnCharacterSlash1 = removeUnCharacterSlash.replace(/(?: \/)/g, " ");
  // if "/ " is there then add text " "
  let removeUnCharacterSlash2 = removeUnCharacterSlash1.replace(
    /(?:\/ )/g,
    " "
  );

  let removeUnCharacterSlash3 = removeUnCharacterSlash2.trim();

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

  // eslint-disable-next-line no-useless-escape
  stringOfText = textArray.toString().replace(/\,/g, "");

  error.length === 0 ? (valueToReturn = stringOfText) : (valueToReturn = error);

  return valueToReturn;
};

export default codeToText;
