import React, { useState } from 'react';
import styles from '../styles/Projects.module.scss';
import Javascript from '../public/javascript.svg';
import NodeJS from '../public/nodejs.svg';
import MongoDB from '../public/mongodb.svg';
import Sass from '../public/sass.svg';
import ReactSvg from '../public/react.svg';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';
import { itemAppear } from './Animation';

function Project7() {
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
        <h3 className={styles.titles_sub}>Dublin Travels</h3>
        Full Stack Application
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
            <img src="/dublintravels.png" alt="transformers-project-picture" />
          </div>
        </div>
        <div className={styles.first_right}>
          <div className={styles.bullet_points}>
            <li>Allowing users to authorise and post</li>
            <li>JavaScript in frontend and backend</li>
            <li>Database use and external APIs</li>
            <li>Everything deployed live to use</li>
          </div>
        </div>
      </div>
      <div
        className={styles.bottom_elements}
        style={{ flexDirection: 'row-reverse' }}
      >
        <div className={styles.button_links}>
          <button className={styles.btn}>
            <a href="https://dt-frontend.onrender.com/">Demo</a>
          </button>
          <button className={styles.btn}>
            <a href="https://github.com/Brnjak6/DublinTravels">Source</a>
          </button>
        </div>
        <div className={styles.technologies}>
          <NodeJS className={styles.svgs} />
          <Javascript className={styles.svgs} />
          <Sass className={styles.svgs} />
          <ReactSvg className={styles.svgs} />
          <MongoDB className={styles.svgs} />
        </div>
      </div>
    </motion.div>
  );
}

export default Project7;
