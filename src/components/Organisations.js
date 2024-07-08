import React, { useState } from "react";
import { Element } from "react-scroll";
import Decoration from "../abstract/Decoration";
import Button from "../abstract/Button";
import Foundations from "./Foundations";
import NonGovernmental from "./NonGovernmental";
import Local from "./Local";
import OrganisationEnum from "../abstract/enum/OrganisationEnum";
const Organisations = () => {
  const [organisation, setOrganisation] = useState(
    OrganisationEnum.FOUNDATIONS,
  );

  const showOrganisation = () => {
    switch (organisation) {
      case OrganisationEnum.NON_GOVERNMENTAL:
        return <NonGovernmental />;
      case OrganisationEnum.LOCAL:
        return <Local />;
      default:
        return <Foundations />;
    }
  };
  return (
    <Element name="organisationsSection" id="organisationsSection">
      <section className="organisations_container">
        <h1 className="organisations_header">Komu pomagamy?</h1>
        <Decoration />
        <div className="organisations_buttons">
          <Button
            text="Fundacjom"
            onClick={() => setOrganisation(OrganisationEnum.FOUNDATIONS)}
            style={{
              border:
                organisation === OrganisationEnum.FOUNDATIONS
                  ? "1px solid #707070"
                  : "none",
            }}
          />
          <Button
            text="Organizacjom pozarządowym"
            onClick={() => setOrganisation(OrganisationEnum.NON_GOVERNMENTAL)}
            style={{
              border:
                organisation === OrganisationEnum.NON_GOVERNMENTAL
                  ? "1px solid #707070"
                  : "none",
            }}
          />
          <Button
            text="Lokalnym zbiórkom"
            onClick={() => setOrganisation(OrganisationEnum.LOCAL)}
            style={{
              border:
                organisation === OrganisationEnum.LOCAL
                  ? "1px solid #707070"
                  : "none",
            }}
          />
        </div>
        {showOrganisation()}
      </section>
    </Element>
  );
};

export default Organisations;
