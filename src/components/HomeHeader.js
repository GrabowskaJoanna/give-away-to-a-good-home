import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const HomeHeader = () => {
  return (
    <div className="header">
      <ul className="header_user">
        <li>
          <NavLink
            to="/logowanie"
            className={({ isActive }) =>
              isActive ? "user_link-active" : "user_link"
            }
          >
            Zaloguj
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rejestracja"
            className={({ isActive }) =>
              isActive ? "user_link-active" : "user_link"
            }
          >
            Załóż konto
          </NavLink>
        </li>
      </ul>
      <nav className="header_nav">
        <ul className="nav_links">
          <li className="nav_link">
            {" "}
            <Link to="startSection" smooth={true} duration={500}>
              Start
            </Link>
          </li>
          <li className="nav_link">
            <Link to="informationSection" smooth={true} duration={500}>
              O co chodzi?
            </Link>
          </li>
          <li className="nav_link">
            <Link to="aboutSection" smooth={true} duration={500}>
              O nas
            </Link>
          </li>
          <li className="nav_link">
            <Link to="organisationsSection" smooth={true} duration={500}>
              Fundacja i organizacje
            </Link>
          </li>
          <li className="nav_link">
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
