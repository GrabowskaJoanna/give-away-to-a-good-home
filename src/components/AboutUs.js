import React from "react";
import { Element } from "react-scroll";
import Decoration from "../abstract/Decoration";
import PeopleImage from "../assets/images/People.png";
import SignatureImage from "../assets/images/Signature.png";

const AboutUs = () => {
  return (
    <Element name="aboutSection">
      <section className="about">
        <div className="about_container">
          <h1 className="about_header">O nas</h1>
          <Decoration />
          <p className="about_text">
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <img
            className="about_signature"
            src={SignatureImage}
            alt="signature"
          />
        </div>
        <img className="about_img" src={PeopleImage} alt="people" />
      </section>
    </Element>
  );
};

export default AboutUs;
