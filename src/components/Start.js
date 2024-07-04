import React from "react";
import { Element } from "react-scroll";
import DecorationImage from "../assets/images/Decoration.png";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  return (
    <Element name="startSection">
      <section className="start_container">
        <div className="start_img"></div>
        <div className="start_CTA">
          <h1 className="CTA_header">
            Zacznij pomagać! <br />
            Oddaj niechciane rzeczy w zaufane ręce
          </h1>
          <img src={DecorationImage} alt="underline" />
          <div className="CTA_buttons">
            <button onClick={() => navigate("/logowanie")}>
              Oddaj <br />
              rzeczy
            </button>
            <button onClick={() => navigate("/logowanie")}>
              Zorganizuj <br />
              zbiórkę
            </button>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Start;
