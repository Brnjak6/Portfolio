import React, { useState } from 'react';
import styles from '../styles/Projects.module.scss';
import ReactSvg from '../public/react.svg';
import Html from '../public/html-5.svg';
import Css from '../public/css.svg';
import Sass from '../public/sass.svg';
import Figma from '../public/figma-1.svg';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';
import { itemAppear } from './Animation';

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
        <h3 className={styles.titles_sub}>Blogr Landing Page</h3>
        Frontend Mentor Challenge
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
            <img src="/mentor.png" alt="third-project-picture" />
          </div>
        </div>
        <div className={styles.first_right}>
          <div className={styles.bullet_points}>
            <li>Converting design to live website</li>
            <li>Implementing both mobile and desktop designs</li>
            <li>Segmenting project into ReactJS components</li>
            <li>Heavy use of JSX and SCSS</li>

            <li>
              Original challenge link available{' '}
              <a
                style={{ color: 'blue' }}
                href="https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP"
              >
                here
              </a>{' '}
            </li>
          </div>
        </div>
      </div>
      <div className={styles.bottom_elements}>
        <div className={styles.button_links}>
          <button className={styles.btn}>
            <a href="https://blogr-challenge-stjepan.netlify.app/">Demo</a>
          </button>
          <button className={styles.btn}>
            <a href="https://github.com/Brnjak6/frontendmentor_blogr">Source</a>
          </button>
        </div>
        <div className={styles.technologies}>
          <Html className={styles.svgs} />
          <Css className={styles.svgs} />
          <ReactSvg className={styles.svgs} />
          <Sass className={styles.svgs} />
          <Figma className={styles.svgs} />
        </div>
      </div>
    </motion.div>
  );
}

export default Project3;
