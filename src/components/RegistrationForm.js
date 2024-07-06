import React from "react";
import Form from "../abstract/Form";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/logowanie", { state: { fromScroll: true } });
  };
  return <Form isLogin={false} handleClick={handleLoginClick} />;
};

export default RegistrationForm;
