import changeWordToMorse from "./changeWordToMorse";
function textToCode() {
  let plainText = "ab c";
  let array = plainText.split("");
  console.log(array);

  let morseArray = [];
  array.map((letter) => {
    changeWordToMorse(letter, morseArray);
  });
  let combined = morseArray.toString().replace(/\,/g, "");
  return combined;
}
module.exports = textToCode
