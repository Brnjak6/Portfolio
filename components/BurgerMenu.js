import React, { useEffect, useState } from "react";
import styles from "../styles/BurgerMenu.module.scss";

function BurgerMenu({ burgerActive }) {
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    burgerActive ? setIsOpen(styles.active) : null;
  }, [burgerActive]);

  return (
    <div className={`${styles.container} ${isOpen}`}>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default BurgerMenu;
