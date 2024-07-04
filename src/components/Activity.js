import React from "react";
import Card from "../abstract/Card";

const Activity = () => {
  return (
    <section className="activity_container">
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
  );
};

export default Activity;
