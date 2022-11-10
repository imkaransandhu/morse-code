import { changeMorseToWord } from "./changeMorseToWord";

const codeToText = (morseCode) => {
  let Array, textArray, stringOfText;
  //let morseCode = "--. --- --- -.. / -- --- .-. -. .. -. --.";

  // Checking for space
  // if " / " is there then add text "space"
  let removeUnCharacterSlash = morseCode.replace(/(?: \/ )/g, "space");
  // if " /" is there then add text " "
  let removeUnCharacterSlash1 = removeUnCharacterSlash.replace(/(?: \/)/g, " ");
  // if "/ " is there then add text " "
  let removeUnCharacterSlash2 = removeUnCharacterSlash1.replace(
    /(?:\/ )/g,
    " "
  );

  Array = removeUnCharacterSlash2.split("space");

  textArray = [];

  Array.map((word) => {
    word = word.split(" ");
    word.map((letter, letterIndex) => {
      changeMorseToWord(letter, textArray, letterIndex);
    });
    textArray.push(" ");
  });

  // eslint-disable-next-line no-useless-escape
  stringOfText = textArray.toString().replace(/\,/g, "");

  return stringOfText;
  //console.log(textArray.toString().replace(/\,/g, ""));
};

export default codeToText;
