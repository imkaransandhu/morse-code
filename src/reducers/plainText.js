export default function plainText(
  state = "Plain text will be displayed Here",
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
