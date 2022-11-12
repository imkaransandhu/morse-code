import React from "react";
import { useDispatch } from "react-redux";
import changeEncOrDec from "../actionCreators/changeEncOrDec";

const CustomButton = ({ crypt }) => {
  const dispatch = useDispatch();

  const changeEOrD = (e) => {
    dispatch(changeEncOrDec(e.target.innerText));
  };

  return (
    <button
      onClick={changeEOrD}
      className={`${
        crypt === "Encrypt" ? "text-white right-0" : "text-yellow  left-0"
      } absolute text-yellow text-4xl top-1/2`}
    >
      {crypt}
    </button>
  );
};

export default CustomButton;
