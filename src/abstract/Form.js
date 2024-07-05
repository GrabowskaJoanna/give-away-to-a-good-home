import React, { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import Decoration from "./Decoration";
import Input from "./Input";
import Button from "./Button";

const Form = ({ handleClick, isLogin }) => {
  return (
    <>
      <HomeHeader />
      <section className="form_container">
        <form className="form">
          <h1 className="form_header">
            {!isLogin ? "Załóż konto" : "Zaloguj się"}
          </h1>
          <Decoration />
          <div className="form_inputs">
            <Input text="Email" type="email" />
            <Input text="Hasło" type="password" />
            {isLogin ? "" : <Input text="Powtórz hasło" type="password" />}
          </div>
          <div className="form_buttons">
            <Button
              text={!isLogin ? "Zaloguj się" : "Załóż konto"}
              onClick={handleClick}
            ></Button>
            <Button text={!isLogin ? "Załóż konto" : "Zaloguj się"}></Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
