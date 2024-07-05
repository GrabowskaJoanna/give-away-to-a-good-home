import React from "react";
import HomeHeader from "./HomeHeader";
import Decoration from "../abstract/Decoration";
import Input from "../abstract/Input";
import Button from "../abstract/Button";

const LoginForm = () => {
  return (
    <>
      <HomeHeader />
      <section className="form_login_container">
        <form className="form_login">
          <h1 className="form_login_header">Zaloguj się</h1>
          <Decoration />
          <div className="form_login_inputs">
            <Input text="Email" type="email" />
            <Input text="Hasło" type="password" />
          </div>
          <div className="form_login_buttons">
            <Button text="Załóż konto"></Button>
            <Button text="Zaloguj się"></Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
