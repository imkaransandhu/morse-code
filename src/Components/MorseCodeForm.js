//import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { useDispatch } from "react-redux";
import changePlainText from "../actionCreators/changePlainText";
import codeToText from "../Functions/MorseCodeToPlainText/codeToText";

const MorseCodeForm = () => {
  //const [morseCode, setMorseCode] = useState("");
  const dispatch = useDispatch();

  const getMorseCode = (e) => {
    //setMorseCode(e.target.value);
    let text = codeToText(e.target.value);
    dispatch(changePlainText(text));
  };

  return (
    <form className="relative w-4/5 h-auto mx-auto mt-5">
      <h1 className="absolute left-12 text-3xl text-black font-bold">
        Morse Code
      </h1>
      <textarea
        placeholder="Enter your code"
        className="text-white text-2xl w-full h-1/5 py-12 px-8  bg-grey   placeholder:text-white"
        onChange={getMorseCode}
      ></textarea>
      <FaRegCopy className="absolute text-4xl right-0 bottom-0" />
    </form>
  );
};

export default MorseCodeForm;
