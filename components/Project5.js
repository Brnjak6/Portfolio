import React, { useState } from "react";
import styles from "../styles/Projects.module.scss";
import Javascript from "../public/javascript.svg";
import Html from "../public/html-5.svg";
import Css from "../public/css.svg";
import Sass from "../public/sass.svg";
import ReactSvg from "../public/react.svg";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { itemAppear } from "./Animation";
import Figma from "../public/figma-1.svg";

function Project5() {
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [element, controls] = useScroll();

  return (
    <motion.div
      variants={itemAppear}
      initial="hidden"
      animate={controls}
      ref={element}
      className={styles.project_one}
    >
      <div className={styles.project_title}>
        <h3 className={styles.titles_sub}>Transformers App</h3>
        React & Modern JavaScript project
      </div>
      <div className={styles.first} style={{ flexDirection: "row-reverse" }}>
        <div className={styles.first_left}>
          <div
            onClick={() => setIsImageClicked(!isImageClicked)}
            className={
              !isImageClicked
                ? styles.first_left_relative
                : styles.first_left_absolute
            }
          >
            <img src="/transformers.jpg" alt="transformers-project-picture" />
          </div>
        </div>
        <div className={styles.first_right}>
          <div className={styles.bullet_points}>
            <li>Heavy usage of ES6 JavaScript</li>
            <li> Highly interactive and dynamic</li>
            <li>Common usage of array & array methods</li>
            <li>Design created in Figma</li>
            <li>Styled with SASS and media queries</li>
          </div>
        </div>
      </div>
      <div
        className={styles.bottom_elements}
        style={{ flexDirection: "row-reverse" }}
      >
        <div className={styles.button_links}>
          <button className={styles.btn}>
            <a href="https://transformers-cyberbase.netlify.app/">Demo</a>
          </button>
          <button className={styles.btn}>
            <a href="https://github.com/Brnjak6/Transformers-React-Project">
              Source
            </a>
          </button>
        </div>
        <div className={styles.technologies}>
          <Html className={styles.svgs} />
          <Css className={styles.svgs} />
          <Javascript className={styles.svgs} />
          <Sass className={styles.svgs} />
          <ReactSvg className={styles.svgs} />
          <Figma className={styles.svgs} />
        </div>
      </div>
    </motion.div>
  );
}

export default Project5;
