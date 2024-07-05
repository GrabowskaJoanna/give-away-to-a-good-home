import React from "react";
import HomeHeader from "./HomeHeader";
import Form from "../abstract/Form";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  return <Form isLogin={false} handleClick={() => navigate("/logowanie")} />;
};

export default RegistrationForm;
