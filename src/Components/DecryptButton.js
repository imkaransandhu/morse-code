import React from "react";
const DecryptButton = ({ setDecryptBool, DecryptBool }) => {
  return (
    <button
      className={
        DecryptBool
          ? "text-white text-4xl absolute left-0 top-1/2 "
          : "text-yellow text-4xl absolute left-0 top-1/2 "
      }
      onClick={() => {
        setDecryptBool(false);
      }}
    >
      Decrypt
    </button>
  );
};

export default DecryptButton;
