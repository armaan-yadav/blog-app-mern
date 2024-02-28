import React from "react";

const Button = ({ text, style }) => {
  return (
    <button
      className={`text-md font-[400] px-3 sm:px-6 py-2 sm:py-2 rounded-lg hover:bg-black hover:text-white duration-200 ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;
