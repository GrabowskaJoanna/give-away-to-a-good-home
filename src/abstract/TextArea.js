import React from "react";

const TextArea = ({ text, placeholder }) => {
  return (
    <label>
      {" "}
      {text}
      <textarea placeholder={placeholder} />
    </label>
  );
};

export default TextArea;
