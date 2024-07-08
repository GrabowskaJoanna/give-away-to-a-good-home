import React from "react";
import Row from "../abstract/Row";

const Local = () => {
  return (
    <div>
      <p className="organisations_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <Row
        header="Zbiórka “Lorem Ipsum 1”"
        goal="Quis varius quam quisque id diam vel quam elementum pulvinar."
        description="Egestas, sed, tempus"
      />
      <Row
        header="Zbiórka “Lorem Ipsum 2”"
        goal="Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."
        description="Ut, aliquam, purus, sit, amet"
      />
      <Row
        header="Zbiórka “Lorem Ipsum 3”"
        goal="Scelerisque in dictum non consectetur a erat nam."
        description="Mi, quis, hendrerit, dolor"
      />
    </div>
  );
};

export default Local;
