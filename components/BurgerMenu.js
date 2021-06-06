import React, { useEffect, useState } from "react";
import styles from "../styles/BurgerMenu.module.scss";
import { Link } from "react-scroll";

function BurgerMenu({ burgerActive, burgerHandler }) {
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    burgerActive ? setIsOpen(styles.active) : null;
  }, [burgerActive]);

  return (
    <div className={`${styles.container} ${isOpen}`}>
      <ul>
        <Link
          to="home"
          smooth={true}
          offset={-80}
          onClick={() => burgerHandler(false)}
        >
          Home
        </Link>
        <Link
          to="projects"
          smooth={true}
          offset={-80}
          onClick={() => burgerHandler(false)}
        >
          Projects
        </Link>
        <Link
          to="about"
          smooth={true}
          offset={-80}
          onClick={() => burgerHandler(false)}
        >
          About
        </Link>
        <Link
          to="contact"
          smooth={true}
          offset={-80}
          onClick={() => burgerHandler(false)}
        >
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default BurgerMenu;
