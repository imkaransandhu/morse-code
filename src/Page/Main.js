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

  //const [inputTextToMorse, setInputTextToMorse] = useState("");

  return (
    <div className=" bg-gray-400  bg-center bg-no-repeat bg-cover min-h-screen ">
      <MorseHeading headingText="DashDot Beats" />

      <div className="flex md:flex-row flex-col py-8 md:gap-x-8 gap-y-4  ">
        <CustomForm customClass="order-1" crypt={encOrDec} typeOfForm={"top"} />

        <div className="flex md:flex-col md:gap-y-8 flex-row md:justify-center justify-between md:order-2 order-last">
          <CustomButton btnType="Encrypt" crypt={encOrDec} />
          <CustomButton btnType="Decrypt" crypt={encOrDec} />
        </div>

        <CustomForm
          customClass="order-3"
          crypt={encOrDec}
          typeOfForm={"bottom"}
        />
      </div>
    </div>
  );
};

export default Main;
