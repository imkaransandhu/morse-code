export default function encOrDec(state = "Decrypt", action) {
  switch (action.type) {
    case "CHANGE_ENCORDEC":
      return action.payload;
    default:
      return state;
  }
}
