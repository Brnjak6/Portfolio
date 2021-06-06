import React, { useState } from "react";
import styles from "../styles/Projects.module.scss";
import Javascript from "../public/javascript.svg";
import Html from "../public/html-5.svg";
import Css from "../public/css.svg";
import Sass from "../public/sass.svg";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { itemAppear } from "./Animation";

function Project4() {
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
        <h3 className={styles.titles_sub}>Tech & Challenges</h3>
        Vanilla JavaScript and DOM Manipulation
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
            <img src="/fourthproject.png" alt="third-project-picture" />
          </div>
        </div>
        <div className={styles.first_right}>
          <div className={styles.bullet_points}>
            <li>Beginner vanilla JavaScript project</li>
            <li> User interactivity created with modern JavaScript</li>
            <li>DRY Principle with ES6 features</li>
            <li>DOM manipulation with user's options</li>
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
            <a
              href="https://interactive-javascript.netlify.app/"
              target="_blank"
            >
              Demo
            </a>
          </button>
          <button className={styles.btn}>
            <a
              href="https://github.com/Brnjak6/VanillaJS-PCParts"
              target="_blank"
            >
              Source
            </a>
          </button>
        </div>
        <div className={styles.technologies}>
          <Html className={styles.svgs} />
          <Css className={styles.svgs} />
          <Javascript className={styles.svgs} />
          <Sass className={styles.svgs} />
        </div>
      </div>
    </motion.div>
  );
}

export default Project4;
