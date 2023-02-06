//import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import changeMorseCode from "../actionCreators/changeMorseCode";
import changePlainText from "../actionCreators/changePlainText";
import codeToText from "../Functions/MorseCodeToPlainText/codeToText";
import textToCode from "../Functions/textToMorse/textToCode";
import { AiFillSound } from "react-icons/ai";
//import { Tone, Synth, Transport } from "tone";
//import { useEffect } from "react";
import * as Tone from "tone";
import { useState } from "react";

const CustomForm = ({ crypt, typeOfForm }) => {
  //const [morseCode, setMorseCode] = useState("");
  const dispatch = useDispatch();
  const plainText = useSelector((state) => state.plainText);
  const morseCode = useSelector((state) => state.morseCode);
  const [playMorseIsActive, setPlayMorseIsActive] = useState(true);

  const getMorseCode = (e) => {
    //setMorseCode(e.target.value);
    let changedPlainText = codeToText(e.target.value);
    //console.log(changedPlainText);
    dispatch(changePlainText(changedPlainText));
  };
  const getPlainText = (e) => {
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

  // playmorsecodesound
  //let code = ".-- .-- .--";

  // const dit = ".";
  // const dah = "-";
  // const frequency = 880;
  // //const frequency2 = 440;
  // const duration = 0.1;

  const playMorse = (e) => {
    e.preventDefault();
    console.log(playMorseIsActive);
    if (!playMorseIsActive) {
      console.error("please wait last audio is playing");
    } else {
      setPlayMorseIsActive(false);
      const synth = new Tone.PolySynth(Tone.Synth).toDestination();
      let now = Tone.now();

      for (const letter of morseCode) {
        if (letter === "-") {
          now += 0.2;
          synth.triggerAttackRelease("E4", "10n", now);
        } else if (letter === ".") {
          now += 0.2;
          synth.triggerAttackRelease("C4", "10n", now);
        } else {
          now += 0.4;
          Tone.Transport.scheduleOnce(() => {
            synth.triggerRelease();
          }, now);
        }
      }
      let totalTime = morseCode.length * 2000;
      setInterval(() => setPlayMorseIsActive(true), totalTime);
    }

    //synth.triggerRelease(releaseArray, now + 0.3);
  };

  // Plain text speak

  const playText = (e) => {
    e.preventDefault();
    let utterance = new SpeechSynthesisUtterance(plainText);
    speechSynthesis.speak(utterance);
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
            ? ""
            : plainText
        }
        className={`${typeOfForm} text-white text-2xl w-full h-1/5 mt-4 py-12 px-8  bg-grey   placeholder:text-white`}
        onChange={crypt === "Encrypt" ? getPlainText : getMorseCode}
        disabled={typeOfForm === "bottom" && true}
      ></textarea>
      <div className="absolute text-4xl cursor-pointer right-4 bottom-4 flex gap-x-4">
        <FaRegCopy onClick={copyToClipboard} className="cursor-pointer" />

        {crypt === "Encrypt"
          ? typeOfForm === "bottom" && (
              <button onClick={playMorse}>
                <AiFillSound className="cursor-pointer" />
              </button>
            )
          : typeOfForm === "bottom" && (
              <button onClick={playText}>
                <AiFillSound className="cursor-pointer" />
              </button>
            )}
      </div>
    </form>
  );
};

export default CustomForm;
