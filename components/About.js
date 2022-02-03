import React from "react";
import styles from "../styles/About.module.scss";
import GitHub from "../public/github.svg";
import LinkedIn from "../public/linkedin.svg";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { itemAppear } from "./Animation";

function About() {
  const [element, controls] = useScroll();

  return (
    <motion.div
      variants={itemAppear}
      initial="hidden"
      animate={controls}
      ref={element}
      className={styles.container}
      id="about"
    >
      <div className={styles.content}>
        <h3 className={styles.content_sub}>ABOUT ME</h3>
        <h1>I am Stjepan Brnjak, self taught developer from Croatia. Located in Dublin</h1>
        <p>
          Graduated technical high school of mechanical engineering and aquired
          bachelors in economy & tourism in 2020. Currently studying Software Development with a goal of 
          turning passion into profession. <br />
          When I am not coding, I am probably travelling to new places, meeting people from different cultures, working out, going out with friends, watching movies, etc...
        </p>
        <div className={styles.links}>
          <div className={styles.svg}>
            <a href="https://github.com/Brnjak6" target="_blank">
              <GitHub className={styles.svg__links} />
            </a>
            <span>Github</span>
          </div>
          <div className={styles.svg}>
            <a
              href="https://www.linkedin.com/in/stjepan-brnjak/"
              target="_blank"
            >
              <LinkedIn className={styles.svg__links} />
            </a>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
