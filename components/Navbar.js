import React, { useState, useEffect } from "react";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-scroll";
import ContactForm from "./ContactForm";

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  useEffect(() => {
    if (burgerActive) {
      document.documentElement.style.overflow = "hidden";
      document.body.scroll = "no";
    } else {
      document.documentElement.style.overflow = "scroll";
      document.body.scroll = "yes";
    }
  }, [burgerActive]);

  const burgerHandler = () => {
    setBurgerActive(!burgerActive);
  };

  const contactHandler = () => {
    setContactActive(!contactActive);
  };

  return (
    <>
      <div className="navbar">
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
        {burgerActive && <BurgerMenu burgerActive={burgerActive} />}
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
