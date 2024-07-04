import React from "react";
import { Element } from "react-scroll";
import DecorationImage from "../assets/images/Decoration.png";
import { useNavigate } from "react-router-dom";
import Button from "../abstract/Button";
import IconCard from "../abstract/IconCard";
import TshirtIcon from "../assets/images/Icon.png";
import BagIcon from "../assets/images/Icon-1.png";
import loupeIcon from "../assets/images/Icon-2.png";
import refreshIcon from "../assets/images/Icon-3.png";

const Information = () => {
  const navigate = useNavigate();
  return (
    <Element name="informationSection">
      <section className="information_container">
        <h1 className="information_header">Wystarczą 4 proste kroki</h1>
        <img
          className="header_decoration"
          src={DecorationImage}
          alt="underline"
        />
        <div className="information_cards">
          <IconCard
            src={TshirtIcon}
            alt="T-shirt icon"
            text="ubrania, zabawki, sprzęt i inne"
            header="Wybierz rzeczy"
          />
          <IconCard
            src={BagIcon}
            alt="bag icon"
            text="skorzystaj z worków na śmieci"
            header="Spakuj je"
          />
          <IconCard
            src={loupeIcon}
            alt="loupe icon"
            text="wybierz zaufane miejsce"
            header="Zdecyduj komu chcesz pomóc"
          />
          <IconCard
            src={refreshIcon}
            alt="refresh icon"
            text="kurier przyjedzie w dogodnym terminie"
            header="Zamów kuriera"
          />
        </div>
        <Button text="ODDAJ RZECZY" onClick={() => navigate("/logowanie")} />
      </section>
    </Element>
  );
};

export default Information;
