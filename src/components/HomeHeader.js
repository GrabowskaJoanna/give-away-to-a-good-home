import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const HomeHeader = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (location.state && location.state.scrollToSection) {
      const section = location.state.scrollToSection;
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
    }
  }, [location]);

  return (
    <div className="header">
      <ul className="header_user">
        <li>
          <RouterLink
            to="/logowanie"
            className={
              location.pathname === "/logowanie"
                ? "user_link-active"
                : "user_link"
            }
          >
            Zaloguj
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/rejestracja"
            className={
              location.pathname === "/rejestracja"
                ? "user_link-active"
                : "user_link"
            }
          >
            Załóż konto
          </RouterLink>
        </li>
      </ul>
      <nav className="header_nav">
        <ul className="nav_links">
          {isHomePage ? (
            <>
              <li className="nav_link">
                <ScrollLink
                  to="startSection"
                  smooth={true}
                  duration={500}
                  className="scroll_link"
                >
                  Start
                </ScrollLink>
              </li>
              <li className="nav_link">
                <ScrollLink
                  to="informationSection"
                  smooth={true}
                  duration={500}
                  className="scroll_link"
                >
                  O co chodzi?
                </ScrollLink>
              </li>
              <li className="nav_link">
                <ScrollLink
                  to="aboutSection"
                  smooth={true}
                  duration={500}
                  className="scroll_link"
                >
                  O nas
                </ScrollLink>
              </li>
              <li className="nav_link">
                <ScrollLink
                  to="organisationsSection"
                  smooth={true}
                  duration={500}
                  className="scroll_link"
                >
                  Fundacja i organizacje
                </ScrollLink>
              </li>
              <li className="nav_link">
                <ScrollLink
                  to="contactSection"
                  smooth={true}
                  duration={500}
                  className="scroll_link"
                >
                  Kontakt
                </ScrollLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav_link">
                <RouterLink
                  to="/"
                  className="router_link"
                  state={{ scrollToSection: "startSection" }}
                >
                  Start
                </RouterLink>
              </li>
              <li className="nav_link">
                <RouterLink
                  to="/"
                  className="router_link"
                  state={{ scrollToSection: "informationSection" }}
                >
                  O co chodzi?
                </RouterLink>
              </li>
              <li className="nav_link">
                <RouterLink
                  to="/"
                  className="router_link"
                  state={{ scrollToSection: "aboutSection" }}
                >
                  O nas
                </RouterLink>
              </li>
              <li className="nav_link">
                <RouterLink
                  to="/"
                  className="router_link"
                  state={{ scrollToSection: "organisationsSection" }}
                >
                  Fundacja i organizacje
                </RouterLink>
              </li>
              <li className="nav_link">
                <RouterLink
                  to="/"
                  className="router_link"
                  state={{ scrollToSection: "contactSection" }}
                >
                  Kontakt
                </RouterLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default HomeHeader;
