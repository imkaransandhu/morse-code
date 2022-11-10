import { FaRegCopy } from "react-icons/fa";
import { useSelector } from "react-redux";

const PlainTextForm = () => {
  const plainText = useSelector((state) => state.plainText);
  console.log(plainText);
  return (
    <form className="absolute left-0 right-0 bottom-0 mx-auto w-4/5 h-auto">
      <h1 className="absolute left-12 text-3xl text-black font-bold">
        Plain Text
      </h1>
      <textarea
        placeholder={plainText}
        className="text-2xl w-full h-full px-8 py-12 bg-grey   placeholder:text-white"
        disabled
      ></textarea>
      <FaRegCopy className="absolute text-4xl right-0 bottom-0" />
    </form>
  );
};

export default PlainTextForm;
