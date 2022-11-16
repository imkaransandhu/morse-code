import { combineReducers } from "redux";
import plainText from "./plainText";
import encOrDec from "./encOrDec";
import morseCode from "./morseCode";

export default combineReducers({
  plainText,
  encOrDec,
  morseCode,
});
