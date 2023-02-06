export default function encOrDec(state = "Encrypt", action) {
  switch (action.type) {
    case "CHANGE_ENCORDEC":
      return action.payload;
    default:
      return state;
  }
}
