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
          bachelors in economy & tourism in 2020. <br />
          While I was studying I was also looking at the career options and what
          would make me happy for my next phase in my life. In early 2021. I
          gave a try to web development. Started by learning design and very
          soon I was very interested in implementation of the designs. Since
          then not a day has passed without touching VSC. Without checking
          Discord web development communities. Without learning abundant amount
          of new stuff that fullfill me in a totally new way. Turning my passion
          into profession is my ultimate goal and you can be part of it.
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
