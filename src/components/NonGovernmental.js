import React, { useState } from "react";
import Pagination from "../abstract/Pagination";
import Row from "../abstract/Row";

const NonGovernmental = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePageNumber = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <Row
              header="Organizacja “Lorem Ipsum 1”"
              goal="Cel i misja: Quis varius quam quisque id diam vel quam elementum pulvinar."
              description="Egestas, sed, tempus"
            />
            <Row
              header="Organizacja “Lorem Ipsum 2”"
              goal="Cel i misja: Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."
              description="Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."
            />
            <Row
              header="Organizacja “Lorem Ipsum 3”"
              goal="Cel i misja: Scelerisque in dictum non consectetur a erat nam."
              description="Mi, quis, hendrerit, dolor"
            />
          </>
        );
      case 2:
        return (
          <>
            <Row
              header="Organizacja “Donec ac aliquam turpis."
              goal="Cel i misja: Donec posuere risus et lorem efficitur, et tincidunt quam posuere."
              description="hasellus vehicula imperdiet ipsum, vel hendrerit"
            />
            <Row
              header="Organizacja “Mauris viverra erat"
              goal="Cel i misja: Fusce sed neque porta nunc viverra efficitur."
              description="erat sed velit"
            />
            <Row
              header="Organizacja “Cras finibus tortor"
              goal="Cel i misja: Suspendisse porttitor tincidunt condimentum. Sed ac pulvinar massa."
              description="sed ac pulvinar"
            />
          </>
        );
    }
  };

  return (
    <>
      <p className="organisations_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      {changePageNumber()}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default NonGovernmental;
