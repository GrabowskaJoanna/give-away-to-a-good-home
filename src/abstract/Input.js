import React from "react";

const Input = ({
  text,
  placeholder,
  type,
  value,
  error,
  onChange,
  className,
}) => {
  return (
    <label>
      {" "}
      {text}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
      {error && <p className="text_error">{error}</p>}
    </label>
  );
};

export default Input;
