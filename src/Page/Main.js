import { useState } from "react";
import DecryptButton from "../Components/DecryptButton";
import EncryptButton from "../Components/EncryptButton";
import MorseCodeForm from "../Components/MorseCodeForm";
import MorseHeading from "../Components/MorseHeading";
import PlainTextForm from "../Components/PlainTextForm";

import MorseCodeForm2 from "../Components/MorseCodeForm2";
import PlainTextForm2 from "../Components/PlainTextForm2";

const Main = () => {
  const [DecryptBool, setDecryptBool] = useState(false)
  const [inputTextToMorse, setInputTextToMorse] = useState('')
  console.log(DecryptBool)
  return (
    <div className="relative bg-foundationimage bg-center bg-no-repeat bg-cover h-full ">
      <MorseHeading headingText="Morse Code" />
      {
        DecryptBool ? <MorseCodeForm2 setInputTextToMorse={setInputTextToMorse} />:
        <MorseCodeForm />
      }

      <DecryptButton setDecryptBool={setDecryptBool} DecryptBool={DecryptBool} />
      <EncryptButton setDecryptBool={setDecryptBool} DecryptBool={DecryptBool} />
      
      {
        DecryptBool ? <PlainTextForm2 inputTextToMorse={inputTextToMorse} />:
        <PlainTextForm />
      }
    </div>
  );
};

export default Main;
