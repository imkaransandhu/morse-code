import React from "react";
import { useDispatch } from "react-redux";
import changeEncOrDec from "../actionCreators/changeEncOrDec";
import changeMorseCode from "../actionCreators/changeMorseCode";
import changePlainText from "../actionCreators/changePlainText";

const CustomButton = ({ btnType, crypt }) => {
  const dispatch = useDispatch();

  const changeEOrD = (e) => {
    dispatch(changeEncOrDec(e.target.innerText));
    dispatch(changePlainText(""));
    dispatch(changeMorseCode(""));
    document.getElementsByClassName("top")[0].value = "";
  };

  return (
    <button
      onClick={changeEOrD}
      className={`${btnType !== crypt ? "text-white " : "text-yellow "} ${
        btnType === "Encrypt" ? " right-0" : "left-0"
      } absolute text-4xl top-1/2`}
    >
      {btnType}
    </button>
  );
};

export default CustomButton;
