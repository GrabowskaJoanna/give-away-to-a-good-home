import React from "react";

const IconCard = ({ src, alt, header, text }) => {
  return (
    <div className="icon_card">
      <img src={src} alt={alt} />
      <h3 className="icon_card_header">{header}</h3>
      <p className="icon_card_text">{text}</p>
    </div>
  );
};

export default IconCard;
