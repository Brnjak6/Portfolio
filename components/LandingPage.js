import React from "react";
import Arrow from "../public/down-arrow.svg";
import styles from "../styles/LandingPage.module.scss";
import { Link } from "react-scroll";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import {
  helloWorld,
  myName,
  frontEnd,
  getStarted,
  itemAppear,
} from "./Animation";

function LandingPage() {
  const [element, controls] = useScroll();

  return (
    <div className={styles.container} id="home">
      <div className={styles.welcome}>
        <div className={styles.welcome_content}>
          <motion.div variants={helloWorld} initial="hidden" animate="show">
            <h1>Hello World!</h1>
          </motion.div>
          <motion.div variants={myName} initial="hidden" animate="show">
            <h2>I am Stjepan</h2>
          </motion.div>
        </div>
        <motion.div
          variants={frontEnd}
          initial="hidden"
          animate="show"
          className={styles.frontend}
        >
          Frontend Developer
        </motion.div>
        <motion.div variants={getStarted} initial="hidden" animate="show">
          <Link
            to="about"
            smooth={true}
            offset={-80}
            className={styles.welcome_started}
          >
            Get Started
            <Arrow className={styles.welcome_started_arrow} />
          </Link>
        </motion.div>
      </div>
      <div className={styles.image_container}>
        <motion.div
          variants={itemAppear}
          initial="hidden"
          animate={controls}
          ref={element}
          className={styles.image_box}
        >
          <img
            className={styles.img}
            src="/portfolio.jpg"
            alt="Picture of the author"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default LandingPage;
