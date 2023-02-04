import ddb from "./../images/ddb.png";

const MorseHeading = ({ headingText }) => {
  return (
    <h1 className="text-white py-4 text-4xl text-center bg-black flex gap-x-4 justify-center items-center">
      <img className="h-12 border-2 " src={ddb} alt="ddb" />
      {headingText}
    </h1>
  );
};

export default MorseHeading;
