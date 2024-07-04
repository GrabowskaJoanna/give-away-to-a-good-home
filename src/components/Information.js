import React from "react";
import { Element } from "react-scroll";
import Card from "./Card";

const Information = () => {
  return (
    <Element name="informationSection">
      <section className="information_container">
        <Card
          number={10}
          header="ODDANYCH WORKÓW"
          text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
        />
        <Card
          number={5}
          header="WSPARTYCH ORGANIZACJI"
          text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
        />
        <Card
          number={7}
          header="ZORGANIZOWANY ZBIÓREK"
          text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
        />
      </section>
    </Element>
  );
};

export default Information;
