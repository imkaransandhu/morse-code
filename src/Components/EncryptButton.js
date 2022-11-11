import React from "react";

const EncryptButton = ({ setDecryptBool, DecryptBool }) => {
  return (
    <button
      className={
        DecryptBool
          ? "text-yellow text-4xl absolute right-0 top-1/2 "
          : "text-white text-4xl absolute right-0 top-1/2 "
      }
      onClick={() => {
        setDecryptBool(true);
      }}
    >
      Encrypt
    </button>
  );
};

export default EncryptButton;
