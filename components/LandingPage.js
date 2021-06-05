import React from "react";
import Arrow from "../public/down-arrow.svg";
import styles from "../styles/LandingPage.module.scss";
import { Link } from "react-scroll";

function LandingPage() {
  return (
    <div className={styles.container} id="home">
      <div className={styles.welcome}>
        <div className={styles.welcome_content}>
          <h1>Hello World!</h1>
          <h2>I am Stjepan</h2>
        </div>
        <div className={styles.frontend}>Frontend Developer</div>
        <Link
          to="projects"
          smooth={true}
          offset={-80}
          className={styles.welcome_started}
        >
          Get Started
          <Arrow className={styles.welcome_started_arrow} />
        </Link>
      </div>
      <div className={styles.image_container}>
        <div className={styles.image_box}>
          <img
            className={styles.img}
            src="/portfolio.jpg"
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
