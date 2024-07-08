import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Logout from "./components/Logout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logowanie" element={<LoginForm />} />
        <Route path="/rejestracja" element={<RegistrationForm />} />
        <Route path="/wylogowano" element={<Logout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
