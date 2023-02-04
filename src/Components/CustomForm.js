//import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import changeMorseCode from "../actionCreators/changeMorseCode";
import changePlainText from "../actionCreators/changePlainText";
import codeToText from "../Functions/MorseCodeToPlainText/codeToText";
import textToCode from "../Functions/textToMorse/textToCode";

const CustomForm = ({ crypt, typeOfForm }) => {
  //const [morseCode, setMorseCode] = useState("");
  const dispatch = useDispatch();
  const plainText = useSelector((state) => state.plainText);
  const morseCode = useSelector((state) => state.morseCode);

  const getMorseCode = (e) => {
    //setMorseCode(e.target.value);
    let changedPlainText = codeToText(e.target.value);
    //console.log(changedPlainText);
    dispatch(changePlainText(changedPlainText));
  };
  const getPlainText = (e) => {
    console.log(e.target.value);
    let changedMorseCode = textToCode(e.target.value);
    dispatch(changeMorseCode(changedMorseCode));
  };

  const copyToClipboard = () => {
    let formText;
    typeOfForm === "top"
      ? (formText = document.getElementsByClassName("top")[0].value)
      : (formText = document.getElementsByClassName("bottom")[0].placeholder);
    console.log(formText);
    navigator.clipboard.writeText(formText);
  };

  return (
    <form
      className={`${
        typeOfForm === "top"
          ? "relative mt-5"
          : "absolute left-0 right-0 bottom-0"
      } w-4/5 h-auto mx-auto`}
    >
      <h1 className="absolute left-0 right-0 text-center text-3xl text-purple-900 bg-black py-2 px-4 font-bold">
        {crypt === "Encrypt"
          ? typeOfForm === "top"
            ? "Plain Text"
            : "Morse Code"
          : typeOfForm === "top"
          ? "Morse Code"
          : "Plain Text"}
      </h1>
      <textarea
        placeholder={
          crypt === "Encrypt"
            ? typeOfForm === "top"
              ? "Write your plain or english text "
              : morseCode
            : typeOfForm === "top"
            ? "Write your Morse Code"
            : plainText
        }
        className={`${typeOfForm} text-white text-2xl w-full h-1/5 mt-4 py-12 px-8  bg-grey   placeholder:text-white`}
        onChange={crypt === "Encrypt" ? getPlainText : getMorseCode}
        disabled={typeOfForm === "bottom" && true}
      ></textarea>
      <div className="absolute text-4xl cursor-pointer right-4 bottom-4">
        <FaRegCopy onClick={copyToClipboard} className="cursor-pointer" />
      </div>
    </form>
  );
};

export default CustomForm;
