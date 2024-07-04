import React from "react";

const Card = ({ number, header, text }) => {
  return (
    <div className="card">
      <h2 className="card_number">{number}</h2>
      <h3 className="card_header">{header}</h3>
      <p className="card_text">{text}</p>
    </div>
  );
};

export default Card;
