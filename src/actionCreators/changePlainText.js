export default function changePlainText(plainText) {
  if (plainText !== " ") {
    return { type: "CHANGE_PLAINTEXT", payload: plainText };
  } else {
    return {
      type: "CHANGE_PLAINTEXT_EMPTY",
      payload: "Decrypted Text will be displayed here",
    };
  }
}
