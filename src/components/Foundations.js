import React, { useState } from "react";
import Row from "../abstract/Row";
import Pagination from "../abstract/Pagination";

const Foundations = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePageNumber = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <Row
              header="Fundacja “Dbam o Zdrowie”"
              goal="Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej."
              description="ubrania, jedzenie, sprzęt AGD, meble, zabawki"
            />
            <Row
              header={`Fundacja “Dla dzieci”`}
              goal="Cel i misja: Pomoc dzieciom z ubogich rodzin."
              description="ubrania, meble, zabawki"
            />
            <Row
              header="Fundacja “Bez domu”"
              goal="Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."
              description="ubrania, jedzenie, ciepłe koce"
            />
          </>
        );
      case 2:
        return (
          <>
            <Row
              header="Fundacja “Donec ac aliquam turpis.”"
              goal="Cel i misja: Donec posuere risus et lorem efficitur, et tincidunt quam posuere."
              description="hasellus vehicula imperdiet ipsum, vel hendrerit"
            />
            <Row
              header="Fundacja “Mauris viverra erat"
              goal="Cel i misja: Fusce sed neque porta nunc viverra efficitur."
              description="erat sed velit"
            />
            <Row
              header="Fundacja “Cras finibus tortor"
              goal="Cel i misja: Suspendisse porttitor tincidunt condimentum. Sed ac pulvinar massa."
              description="sed ac pulvinar"
            />
          </>
        );
      case 3:
        return (
          <>
            <Row
              header="Fundacja “Cras porta sagittis viverra”"
              goal="Cel i misja: Etiam at justo feugiat, placerat sapien vel, mollis."
              description="ras varius urna quam, ut"
            />
            <Row
              header="Fundacja “Cras varius urna"
              goal="Cel i misja: Fusce sed neque porta nunc viverra efficitur."
              description="erat sed velit"
            />
            <Row
              header="Fundacja “Interdum et malesuada fames."
              goal="Cel i misja: Suspendisse porttitor tincidunt condimentum. Sed ac pulvinar massa."
              description="sed ac pulvinar"
            />
          </>
        );
      default:
        return null;
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
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isFoundation
      />
    </>
  );
};

export default Foundations;
