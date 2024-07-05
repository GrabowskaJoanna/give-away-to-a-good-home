import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../abstract/Form";

const LoginForm = () => {
  const navigate = useNavigate();
  return <Form isLogin handleClick={() => navigate("/rejestracja")} />;
};

export default LoginForm;
