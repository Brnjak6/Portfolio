import React, { useState, useEffect } from "react";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-scroll";
import ContactForm from "./ContactForm";
import Sun from "../public/sun.svg";
import Moon from "../public/moon.svg";

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const [scrollState, setScrollState] = useState("top");
  const [isThemeDark, setIsThemeDark] = useState(false);
  let listener = null;

  useEffect(() => {
    listener = document.addEventListener("scroll", () => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120 && scrolled <= 6500) {
        if (scrollState !== "moving") {
          setScrollState("moving");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  const burgerHandler = () => {
    setBurgerActive(!burgerActive);
  };

  const contactHandler = () => {
    setContactActive(!contactActive);
  };

  return (
    <>
      <div
        className={`${"navbar"} ${
          scrollState === "top" ? "navbar__top" : "navbar__moving"
        }`}
      >
        <div
          onClick={() => {
            document.documentElement.dataset.theme =
              document.documentElement.dataset.theme === "light"
                ? "dark"
                : "light";
            setIsThemeDark(!isThemeDark);
          }}
        >
          {isThemeDark ? (
            <Sun className="nav_svg nav_svg__sun" />
          ) : (
            <Moon className="nav_svg " />
          )}
        </div>
        <div className="routes">
          <ul>
            <li>
              <Link to="home" smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} offset={-80}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-80}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={() => setContactActive(true)} className="nav_button">
          Contact
        </button>
        <div
          className={
            burgerActive ? "burger-container change" : "burger-container"
          }
        >
          <div className="burger-relative " onClick={() => burgerHandler()}>
            <div className="burger-box">
              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
              <div className="bar bar3"></div>
            </div>
          </div>
        </div>
        {burgerActive && (
          <BurgerMenu
            burgerActive={burgerActive}
            burgerHandler={burgerHandler}
          />
        )}
        {contactActive && (
          <ContactForm
            contactHandler={contactHandler}
            contactActive={contactActive}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
