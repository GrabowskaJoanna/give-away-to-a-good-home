import React from "react";
import { Element } from "react-scroll";
import Decoration from "../abstract/Decoration";
import Input from "../abstract/Input";
import TextArea from "../abstract/TextArea";
import Button from "../abstract/Button";
import fbIcon from "../assets/images/Facebook.png";
import instagramIcon from "../assets/images/Instagram.png";

const Contact = () => {
  return (
    <Element name="contactSection">
      <div className="container">
        <section className="contact_container">
          <div className="contact_img" />
          <div className="contact_form">
            <h1 className="contact_form_header">Skontaktuj się z nami</h1>
            <Decoration />
            <div className="contact_form_inputs">
              <Input
                text="Wpisz swoje imię"
                type="text"
                placeholder="Krzysztof"
              />
              <Input
                text="Wpisz swój email"
                type="email"
                placeholder="abc@xyz.pl"
              />
            </div>
            <TextArea
              text="Wpisz swoją wiadomosć"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <Button text="Wyślij" />
          </div>
        </section>
        <footer className="footer">
          <p className="footer_text">Copyright by Coders Lab</p>
          <div className="footer_icons">
            <img src={fbIcon} alt="Facebook" />
            <img src={instagramIcon} alt="Instagram" />
          </div>
        </footer>
      </div>
    </Element>
  );
};

export default Contact;
