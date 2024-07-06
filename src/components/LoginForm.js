import React from "react";
import Form from "../abstract/Form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate("/rejestracja", { state: { fromScroll: true } });
  };
  return <Form isLogin handleClick={handleRegisterClick} />;
};

export default LoginForm;
