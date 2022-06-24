import React, { useState } from 'react';
import styles from '../styles/Projects.module.scss';
import Javascript from '../public/javascript.svg';
import Html from '../public/html-5.svg';
import Css from '../public/css.svg';
import Sass from '../public/sass.svg';
import ReactSvg from '../public/react.svg';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';
import { itemAppear } from './Animation';
import Figma from '../public/figma-1.svg';

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
        <h3 className={styles.titles_sub}>JavaScript Quiz</h3>
        Full stack app created in GitHub collaboration
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
            <img src="/quiz.png" alt="quiz-project-picture" />
          </div>
        </div>
        <div className={styles.first_right}>
          <div className={styles.bullet_points}>
            <li>Git collaboration between frontend and backend</li>
            <li>Creating frontend JS logic</li>
            <li>Making JavaScript questions</li>
            <li>Designed in Figma</li>
            <li>Styled with SASS and media queries</li>
          </div>
        </div>
      </div>
      <div className={styles.bottom_elements}>
        <div className={styles.button_links}>
          <button className={styles.btn}>
            <a href="https://javascript10questions.web.app/">Demo</a>
          </button>
          <button className={styles.btn}>
            <a href="https://github.com/Brnjak6/JavaScript-Quiz">Source</a>
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
