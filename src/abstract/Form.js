import React, { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import Decoration from "./Decoration";
import Input from "./Input";
import Button from "./Button";

const Form = ({ handleClick, isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({});
  const validator = () => {
    let errors = {};
    let isValid = true;

    if (!email) {
      errors.email = "Email jest wymagany";
      isValid = false;
    } else {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(email)) {
        errors.email = "Niepoprawny format email";
        isValid = false;
      }
    }
    if (password.length < 7) {
      errors.password = "Hasło jest za krótkie!";
      isValid = false;
    }
    if (!isLogin && (!repeatPassword || repeatPassword !== password)) {
      errors.repeatPassword = "Hasła muszą być takie same i nie puste!";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator()) {
      console.log("Walidacja przebiegła pomyślnie");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
      setErrors({});
    }
  };

  return (
    <>
      <HomeHeader />
      <section className="form_container">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="form_header">
            {!isLogin ? "Załóż konto" : "Zaloguj się"}
          </h1>
          <Decoration />
          <div className="form_inputs">
            <Input
              text="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              className={errors.email ? "input_error" : ""}
            />
            <Input
              text="Hasło"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              className={errors.password ? "input_error" : ""}
            />
            {isLogin ? (
              ""
            ) : (
              <Input
                text="Powtórz hasło"
                type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                error={errors.repeatPassword}
                className={errors.repeatPassword ? "input_error" : ""}
              />
            )}
          </div>
          <div className="form_buttons">
            <Button
              text={!isLogin ? "Zaloguj się" : "Załóż konto"}
              onClick={handleClick}
            ></Button>
            <Button
              text={!isLogin ? "Załóż konto" : "Zaloguj się"}
              type="submit"
            ></Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
