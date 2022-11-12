import { combineReducers } from "redux";
import plainText from "./plainText";
import encOrDec from "./encOrDec";

export default combineReducers({
  plainText,
  encOrDec,
});
