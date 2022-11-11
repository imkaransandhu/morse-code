import changeWordToMorse from "./changeWordToMorse";
function textToCode(plainText) {
  let array = plainText.split("");
  let morseArray = [];
  array.map((letter) => {
    changeWordToMorse(letter, morseArray);
  });
  let combined = morseArray.toString().replace(/,/g, "");
  return combined
}
export default textToCode
