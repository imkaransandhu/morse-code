//import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import changeMorseCode from "../actionCreators/changeMorseCode";
import changePlainText from "../actionCreators/changePlainText";
import codeToText from "../Functions/MorseCodeToPlainText/codeToText";
import textToCode from "../Functions/textToMorse/textToCode";
import { AiFillSound, AiFillStop } from "react-icons/ai";
//import { Tone, Synth, Transport } from "tone";
//import { useEffect } from "react";
//import * as Tone from "tone";
import { useRef, Fragment, useState } from "react";

const CustomForm = ({ crypt, typeOfForm, customClass }) => {
  //const [morseCode, setMorseCode] = useState("");
  const dispatch = useDispatch();
  const plainText = useSelector((state) => state.plainText);
  const morseCode = useSelector((state) => state.morseCode);
  //const [playMorseIsActive, setPlayMorseIsActive] = useState(true);
  const stopAudioBtn = useRef();
  const [oscillator, setOscillator] = useState([]);
  //const [stopAudio, setStopAudio] = useState(true);

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

  const handlePlayMorse = (e) => {
    e.preventDefault();

    const context = new (window.AudioContext || window.webkitAudioContext)();
    const dotDuration = 100; // duration of a dot in milliseconds
    const dashDuration = dotDuration * 3;
    const pauseDuration = dotDuration;

    const codeArray = morseCode.split("");
    let currentTime = 0;

    const playSound = (duration, startTime) => {
      const newOscillator = context.createOscillator();
      newOscillator.frequency.value = 440;
      newOscillator.connect(context.destination);
      newOscillator.start(startTime / 1000);
      newOscillator.stop((startTime + duration) / 1000);
      setOscillator((preValues) => [...preValues, newOscillator]);
    };

    codeArray.forEach((c) => {
      console.log(c);
      switch (c) {
        case ".":
          playSound(dotDuration, currentTime);
          currentTime += dotDuration + pauseDuration;
          break;
        case "-":
          playSound(dashDuration, currentTime);
          currentTime += dashDuration + pauseDuration;
          break;
        case " ":
          currentTime += pauseDuration * 2;
          break;
        case "/":
          currentTime += pauseDuration * 2;
          break;
        default:
          console.error("Invalid Morse code character");
      }
    });

    // playMorse();
    // let totalTime = morseCode.length * 2000;
    // setInterval(() => setPlayMorseIsActive(true), totalTime);
  };

  function stopMorseCode(e) {
    e.preventDefault();
    if (oscillator) {
      console.log(oscillator);
      oscillator.map((oscillation) => {
        oscillation.stop();
      });
      setOscillator([]);
    }
  }

  //synth.triggerRelease(releaseArray, now + 0.3);

  // function playMorse() {
  //   if (!playMorseIsActive) {
  //     console.error("please wait last audio is playing");
  //   } else {
  //     setPlayMorseIsActive(false);
  //     const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  //     let now = Tone.now();
  //     let releaseArray = [];
  //     for (const letter of morseCode) {
  //       if (letter === "-") {
  //         now += 0.2;
  //         releaseArray.push("E4");
  //         synth.triggerAttack("E4", now);
  //         //synth.stop();
  //       } else if (letter === ".") {
  //         now += 0.2;
  //         synth.triggerAttack("C4", now);
  //         //synth.stop();
  //         releaseArray.push("C4");
  //       } else {
  //         now += 0.4;
  //         //console.log(releaseArray);
  //         console.log(synth);
  //         synth.triggerRelease(releaseArray, now);
  //         //releaseArray = [];
  //         //Tone.Transport.stop();
  //       }
  //       console.log(releaseArray);
  //       stopAudioBtn.current.addEventListener("click", (e) => {
  //         e.preventDefault();
  //         console.log(synth);
  //         now += 0.4;
  //         synth.triggerRelease(releaseArray, now);
  //       });
  //     }
  //     // add event
  //   }
  // }
  // Plain text speak

  const playText = (e) => {
    e.preventDefault();
    let utterance = new SpeechSynthesisUtterance(plainText);
    speechSynthesis.speak(utterance);
  };

  return (
    <form className={` ${customClass} relative md:w-4/5 w-full h-auto mx-auto`}>
      <h1 className=" text-center text-3xl text-white bg-black  py-2 px-4 font-bold">
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
        className={`${typeOfForm} text-white text-lg w-full md:h-96 h-60  p-4  bg-grey   placeholder:text-white`}
        onChange={crypt === "Encrypt" ? getPlainText : getMorseCode}
        disabled={typeOfForm === "bottom" && true}
      ></textarea>
      <div className="absolute text-4xl cursor-pointer right-4 bottom-4 flex gap-x-4">
        <FaRegCopy onClick={copyToClipboard} className="cursor-pointer" />

        {crypt === "Encrypt"
          ? typeOfForm === "bottom" && (
              <Fragment>
                <button onClick={stopMorseCode} ref={stopAudioBtn}>
                  <AiFillStop className="cursor-pointer" />
                </button>
                <button onClick={handlePlayMorse}>
                  <AiFillSound className="cursor-pointer" />
                </button>
              </Fragment>
            )
          : typeOfForm === "bottom" && (
              <Fragment>
                <button onClick={stopMorseCode} ref={stopAudioBtn}>
                  <AiFillStop className="cursor-pointer" />
                </button>
                <button onClick={playText}>
                  <AiFillSound className="cursor-pointer" />
                </button>
              </Fragment>
            )}
      </div>
    </form>
  );
};

export default CustomForm;
