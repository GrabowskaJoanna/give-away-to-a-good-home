import React from "react";

const TextArea = ({ text, placeholder, value, onChange, error, className }) => {
  return (
    <label>
      {" "}
      {text}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
      {error && <p className="text_error">{error}</p>}
    </label>
  );
};

export default TextArea;
