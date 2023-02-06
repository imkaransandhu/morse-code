export default function plainText(
  state = "Write your plain or english text",
  action
) {
  switch (action.type) {
    case "CHANGE_PLAINTEXT":
      return action.payload;
    case "CHANGE_PLAINTEXT_EMPTY":
      return action.payload;
    default:
      return state;
  }
}
