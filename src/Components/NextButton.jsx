import React from "react";

const NextButton = ({ style, className, onClick }) => {
  return (
    <div
      className={`${className} right-0 bg-white text-black rounded-full  z-50`}
      style={{ ...style, right: "0px" }}
      onClick={onClick}
    >
      {">"}
    </div>
  );
};

export default NextButton;
