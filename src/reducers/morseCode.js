export default function morseCode(
  state = "Morse Code text will be displayed Here",
  action
) {
  switch (action.type) {
    case "CHANGE_MORSECODE":
      return action.payload;
    case "CHANGE_MORSECODE_EMPTY":
      return action.payload;
    default:
      return state;
  }
}
