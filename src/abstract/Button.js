import React from "react";

const Button = ({ text, onClick, type }) => {
  return (
    <button className="btn" onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
