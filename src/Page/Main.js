import DecryptButton from "../Components/DecryptButton";
import EncryptButton from "../Components/EncryptButton";
import MorseCodeForm from "../Components/MorseCodeForm";
import MorseHeading from "../Components/MorseHeading";
import PlainTextForm from "../Components/PlainTextForm";

const Main = () => {
  return (
    <div className="relative bg-foundationimage bg-center bg-no-repeat bg-cover h-full ">
      <MorseHeading headingText="Morse Code" />

      <MorseCodeForm />

      <DecryptButton />
      <EncryptButton />

      <PlainTextForm />
    </div>
  );
};

export default Main;
