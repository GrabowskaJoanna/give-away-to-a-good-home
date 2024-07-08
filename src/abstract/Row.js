import React from "react";

const Row = ({ header, goal, description }) => {
  return (
    <div className="organisations_row">
      <div className="organisations_info">
        <h1 className="organisations_info_header">{header}</h1>
        <p className="organisations_info_text">{goal}</p>
      </div>
      <p className="organisation_description">{description}</p>
    </div>
  );
};

export default Row;
