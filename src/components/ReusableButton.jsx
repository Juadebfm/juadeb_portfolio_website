import React from "react";

const ReusableButton = ({ btnText, btnIcon, className }) => {
  return (
    <button className={className}>
      {btnText} {btnIcon}
    </button>
  );
};

export default ReusableButton;
