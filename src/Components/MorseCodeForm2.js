import { FaRegCopy } from "react-icons/fa";
import textToCode from "../Functions/textToMorse/textToCode";
export default function MorseCodeForm2({setInputTextToMorse}) {
  function usertypes(text) {
    let userinp = (text.target.value).toLowerCase()
    let ohword = textToCode(userinp);
    console.log(ohword);
    setInputTextToMorse(ohword)
  }
  return (
    <form className="relative w-4/5 h-auto mx-auto mt-5">
      <h1 className="absolute left-12 text-3xl text-black font-bold">
        Morse Code
      </h1>
      <textarea
        placeholder='Enter text'
        className="text-white text-2xl w-full h-1/5 py-12 px-8  bg-grey   placeholder:text-white"
        onChange={usertypes}
      ></textarea>
      <FaRegCopy className="absolute text-4xl right-0 bottom-0" />
    </form>
  );
}
