import React, { useState } from "react";
import styles from "../styles/Projects.module.scss";
import Javascript from "../public/javascript.svg";
import Html from "../public/html-5.svg";
import Css from "../public/css.svg";
import Sass from "../public/sass.svg";
import Figma from "../public/figma-1.svg";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { itemAppear } from "./Animation";

function Project3() {
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
        <h3 className={styles.titles_sub}>Go-Master</h3>
        Beginner's guide to PC components
      </div>
      <div className={styles.first}>
        <div className={styles.first_left}>
          <div
            onClick={() => setIsImageClicked(!isImageClicked)}
            className={
              !isImageClicked
                ? styles.first_left_relative
                : styles.first_left_absolute
            }
          >
            <img src="/thirdproject.png" alt="third-project-picture" />
          </div>
        </div>
        <div className={styles.first_right}>
          <div className={styles.bullet_points}>
            <li>Writing HTML code with BEM methodology</li>
            <li>Using SASS variables and mixins</li>
            <li>Vanilla JS is used for event listeners</li>
            <li>Design created in Figma</li>
            <li>CSS Grid is used for main layout </li>
            <li>Flexbox wrapping for simple responsitivity</li>
            <li>Responsive across all devices</li>
          </div>
        </div>
      </div>
      <div className={styles.bottom_elements}>
        <div className={styles.button_links}>
          <button className={styles.btn}>
            <a href="https://pc-components-scss.netlify.app/" target="_blank">
              Demo
            </a>
          </button>
          <button className={styles.btn}>
            <a href="https://github.com/Brnjak6/PC-Components" target="_blank">
              Source
            </a>
          </button>
        </div>
        <div className={styles.technologies}>
          <Html className={styles.svgs} />
          <Css className={styles.svgs} />
          <Javascript className={styles.svgs} />
          <Sass className={styles.svgs} />
          <Figma className={styles.svgs} />
        </div>
      </div>
    </motion.div>
  );
}

export default Project3;
