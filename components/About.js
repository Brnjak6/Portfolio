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
        <h1>I am Stjepan Brnjak, self taught developer from Croatia</h1>
        <p>
          Graduated technical high school of mechanical engineering and aquired
          bachelors in economy & tourism in 2020. In the beginning of 2021 I
          gave a try to web development and it is best choice I have made. I
          enjoy learning web development on my own from abundant list of online
          sources and being active member on Discord.
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
              href="https://www.linkedin.com/in/stjepan-brnjak-a224951a1/"
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
