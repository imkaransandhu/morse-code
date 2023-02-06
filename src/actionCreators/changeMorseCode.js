export default function changeMorseCode(morseCode) {
  if (morseCode !== "") {
    return { type: "CHANGE_MORSECODE", payload: morseCode };
  } else {
    console.log(morseCode);
    return {
      type: "CHANGE_MORSECODE_EMPTY",
      payload:
        ".-- .-. .. - . / -.-- --- ..- .-. / .--. .-.. .- .. -. / --- .-. / . -. --. .-.. .. ... .... / - . -..- - ",
    };
  }
}
