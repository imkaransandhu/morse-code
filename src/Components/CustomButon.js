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
      className={`${
        btnType !== crypt
          ? "text-white bg-slate-900 text-2xl border-2 border-white"
          : "text-yellow bg-black text-4xl border-4 border-yellow "
      } ${
        btnType === "Encrypt" ? " right-0" : "left-0"
      } absolute  top-1/2  px-4 py-2 rounded-lg shadow-lg
      `}
    >
      {btnType}
    </button>
  );
};

export default CustomButton;
