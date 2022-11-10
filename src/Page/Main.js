//import DecryptButton from "../Components/DecryptButton";
//import EncryptButton from "../Components/EncryptButton";
//import TopForm from "../Components/TopForm";
import MorseHeading from "../Components/MorseHeading";
//import PlainTextForm from "../Components/BottomForm";
import { useSelector } from "react-redux";
import CustomButton from "../Components/CustomButon";
import CustomForm from "../Components/CustomForm";

const Main = () => {
  const encOrDec = useSelector((state) => state.encOrDec);

  return (
    <div className="relative bg-foundationimage bg-center bg-no-repeat bg-cover h-full ">
      <MorseHeading headingText="Morse Code" />

      <CustomForm crypt={encOrDec} typeOfForm={"top"} />

      <CustomButton crypt="Encrypt" />
      <CustomButton crypt="Decrypt" />

      <CustomForm crypt={encOrDec} typeOfForm={"bottom"} />
    </div>
  );
};

export default Main;
