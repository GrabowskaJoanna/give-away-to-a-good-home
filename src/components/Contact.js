import React, { useState } from "react";
import { Element } from "react-scroll";
import Decoration from "../abstract/Decoration";
import Input from "../abstract/Input";
import TextArea from "../abstract/TextArea";
import Button from "../abstract/Button";
import fbIcon from "../assets/images/Facebook.png";
import instagramIcon from "../assets/images/Instagram.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validator = () => {
    let isValid = true;
    let error = {};
    if (!name) {
      error.name = "Należy podać imię";
      isValid = false;
    } else {
      const regex = /^[^\s]+$/;
      if (!regex.test(name)) {
        error.name = "Należy wprowadzić tylko jeden wyraz";
        isValid = false;
      }
    }
    if (!email) {
      error.email = "Email jest wymagany";
      isValid = false;
    } else {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(email)) {
        error.email = "Niepoprawny format email";
        isValid = false;
      }
    }
    if (message.length < 121) {
      error.message = "Wiadomość musi mieć co najmniej 120 znaków";
      isValid = false;
    }
    setErrors(error);
    return isValid;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validator()) {
  //     console.log("Walidacja przebiegła pomyślnie");
  //     fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //     });
  //   }
  // };
  return (
    <Element name="contactSection" id="contactSection">
      <div className="container">
        <section className="contact_container">
          <div className="contact_img" />
          <form className="contact_form" onSubmit={handleSubmit}>
            <h1 className="contact_form_header">Skontaktuj się z nami</h1>
            <Decoration />
            <div className="contact_form_inputs">
              <Input
                text="Wpisz swoje imię"
                type="text"
                placeholder="Krzysztof"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
                className={errors.name ? "input_error" : ""}
              />
              <Input
                text="Wpisz swój email"
                type="email"
                placeholder="abc@xyz.pl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                className={errors.email ? "input_error" : ""}
              />
            </div>
            <TextArea
              text="Wpisz swoją wiadomosć"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={errors.message}
              className={errors.message ? "textarea_error" : ""}
            />
            <Button text="Wyślij" type="submit" />
          </form>
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
