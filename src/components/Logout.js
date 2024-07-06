import React from "react";
import Decoration from "../abstract/Decoration";
import Button from "../abstract/Button";
import HomeHeader from "./HomeHeader";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <section className="logout">
      <HomeHeader />
      <div className="logout_container">
        <h1 className="logout_header">Wylogowanie nastąpiło pomyślnie!</h1>
        <Decoration />
        <Button text="Strona główna" onClick={() => navigate("/")} />
      </div>
    </section>
  );
};

export default Logout;
