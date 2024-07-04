import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const HomeHeader = () => {
  return (
    <div className="header">
      <ul className="header-user">
        <li>
          <NavLink to="/logowanie">Zaloguj</NavLink>
        </li>
        <li>
          <NavLink to="/rejestracja">Załóż konto</NavLink>
        </li>
      </ul>
      <nav className="header-nav">
        <ul>
          <li className="nav-link">
            {" "}
            <Link to="startSection" smooth={true} duration={500}>
              Start
            </Link>
          </li>
          <li className="nav-link">
            <Link to="informationSection" smooth={true} duration={500}>
              O co chodzi?
            </Link>
          </li>
          <li className="nav-link">
            <Link to="aboutSection" smooth={true} duration={500}>
              O nas
            </Link>
          </li>
          <li className="nav-link">
            <Link to="organisationsSection" smooth={true} duration={500}>
              Fundacja i organizacje
            </Link>
          </li>
          <li className="nav-link">
            <Link to="contactSection" smooth={true} duration={500}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomeHeader;
